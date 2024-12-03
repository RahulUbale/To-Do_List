import React, { useState } from 'react';

const DeleteComponent = ({ items, selectedItems, toggleSelect, confirmDelete }) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDeleteClick = () => {
        if (selectedItems.length === 0) return; // Prevents deletion if no items are selected
        setShowConfirm(true); // Show confirmation dialog
    };

    const handleConfirmDelete = () => {
        confirmDelete(selectedItems); // Call the confirmDelete function with selected items
        setShowConfirm(false); // Close confirmation dialog
    };

    const handleCancelDelete = () => {
        setShowConfirm(false); // Close confirmation dialog
    };

    return (
        <div>
            <h3 class="textcolor">Select Tasks to Delete</h3>
            {items.map((item, index) => (
                <div key={index} className="item" style={{ display: 'flex' }}>
                  
                    <span>{item}</span>
                    <div>
                    <input  style={{ display: 'flex', alignItems: 'right' }}
                        type="checkbox" 
                        checked={selectedItems.includes(item)} 
                        onChange={() => toggleSelect(item)} 
                    />
                    </div>
                </div>
            ))}

            <button onClick={handleDeleteClick} className="delete-button">Delete Selected</button>

            {showConfirm && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h4>Are you sure you want to delete these Tasks?</h4>
                        <button onClick={handleConfirmDelete} className="update-button">Yes</button>
                        <button onClick={handleCancelDelete} className="close-button">No</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteComponent;

