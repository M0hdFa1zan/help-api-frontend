import "./Herosection.css"
import React, { useEffect, useState } from 'react';
import { getAllCards, searchCardsByTitle, createCard } from '../services/CardService';
import CardsList from './CardsList'
import Modal from "./Modal";

function Herosection() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        console.log('Cards State Updated:', cards);
    }, [cards]);

    const handleCreateCard = async (newCard) => {
        try {
            setLoading(true);
            await createCard(newCard);  // Create the new card
            const data = await getAllCards();  // Refetch all cards
            console.log(">>>>DATA", data);
            setCards(data);  // Update the state with the new list of cards
        } catch (error) {
            setError('Failed to create card.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const data = await getAllCards();
                setCards(data);
            } catch (error) {
                setError('Failed to fetch cards.');
            } finally {
                setLoading(false);
            }
        };

        fetchCards();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await searchCardsByTitle(searchTerm);
            setCards(data);
        } catch (error) {
            setError('Failed to search for cards.');
        } finally {
            setLoading(false);
        }
    };

    const clearResults = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSearchTerm("");
        try {
            const data = await getAllCards();
            setCards(data);
        } catch (error) {
            setError('Failed to fetch cards.');
        } finally {
            setLoading(false);
        }
    };

    let button;
    if (cards.length === 1) {
        button = <div className='arrow' onClick={clearResults}><i class="fa-solid fa-multiply" /></div>
    } else button = <div className='arrow' onClick={handleSearch}><i class="fa-solid fa-arrow-right" /></div>

    return (
        <>
            <div className='navbar'>
                <div className='contain-nav'>
                    <div className='navleft'>
                        <div className='logo'>
                            <img src='../Assets/Images/logo.svg' alt="" />
                        </div>
                        <div className='help'> <span>|</span> Help Center</div>
                    </div>
                    <div className='navright'>
                        <div className='submit-btn'><button onClick={openModal}>Submit a request</button></div>
                    </div>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onSubmit={handleCreateCard}
                    />
                </div>
            </div>
            <div className='hero'>
                <div className='help-title'>How can we help?</div>
                <div className='inp-field'>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {button}
                    </form>
                    <div className='arrow'></div>
                </div>
            </div>
            <CardsList cards={cards} isLoadingCards={loading} error={error} />
        </>
    )
}

export default Herosection
