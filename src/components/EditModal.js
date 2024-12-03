import React, { useState } from 'react';

const EditModal = ({ item, onUpdate, onClose }) => {
    const [updatedItem, setUpdatedItem] = useState(item);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedItem);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h2>Edit Item</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={updatedItem}
                        onChange={(e) => setUpdatedItem(e.target.value)}
                        required
                        className="modal-input" // Added class for modal input
                    />
                    <button type="submit" className="update-button">Update</button>
                    <button type="button" onClick={onClose} className="close-button">Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default EditModal;

