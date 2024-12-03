import React from 'react';

const ViewComponent = ({ items, searchTerm, setSearchTerm, onEdit, onDelete }) => {
    
    const filteredItems = items
        .map((item, index) => ({ item, index })) // Keep track of the original index
        .filter(({ item }) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div>
            <h3 class="textcolor">Search Tasks</h3>
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Type to Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="item-list">
                {filteredItems.length > 0 ? (
                    filteredItems.map(({ item, index }) => (
                        <div key={index} className="item">
                            <span>{item}</span>
                            <div className="button-group">
                                <button onClick={() => onEdit(index)} className="edit-button">✏️</button>
                                <button onClick={() => onDelete(index)} className="delete-button">⛌</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No task found matching your search.</p>
                )}
            </div>
        </div>
    );
};

export default ViewComponent;
