import axios from 'axios';

const API_URL = 'http://localhost:8080';  // Update this to your API's base URL

export const getAllCards = async () => {
    try {
        const response = await axios.get(`${API_URL}/cards`);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the cards!", error);
        throw error;
    }
};

export const searchCardsByTitle = async (title) => {
    try {
        const response = await axios.get(`${API_URL}/cards/search/${title}`);
        return response.data;
    } catch (error) {
        console.error("There was an error searching for cards!", error);
        throw error;
    }
};

export const createCard = async (card) => {
    try {
        const response = await axios.post(`${API_URL}/cards`, card);
        return response.data;
    } catch (error) {
        console.error("There was an error creating the card!", error);
        throw error;
    }
};
