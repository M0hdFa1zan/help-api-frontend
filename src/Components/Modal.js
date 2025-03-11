import React, { useState } from 'react';
import './Modal.css';  // We'll create this CSS file for styling

const Modal = ({ isOpen, onClose, onSubmit }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description });
        setTitle('');
        setDescription('');
        onClose();  // Close the modal after submission
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Create New Card</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label>
                        Description:
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <div className="modal-buttons">
                        <button type="submit">Create</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
