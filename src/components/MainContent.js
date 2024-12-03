import React, { useState } from 'react';
import AddComponent from './AddComponent';
import ViewComponent from './ViewComponent';
import DeleteComponent from './DeleteComponent';
import EditModal from './EditModal';
import NavigationBar from './NavigationBar';
import '../styles/MainContent.css';

const MainContent = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [activeComponent, setActiveComponent] = useState('add');
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const toggleSelect = (item) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(item)
                ? prevSelected.filter((i) => i !== item)
                : [...prevSelected, item]
        );
    };

    const confirmDelete = () => {
        setItems(items.filter(item => !selectedItems.includes(item)));
        setSelectedItems([]); // Clear selection after deletion
    };

    const handleEditItem = (index) => {
        setCurrentIndex(index);
        setIsEditing(true);
    };

    const handleUpdateItem = (updatedItem) => {
        const newItems = [...items];
        newItems[currentIndex] = updatedItem;
        setItems(newItems);
        setIsEditing(false); // Close the modal after editing
    };

    return (
        <div className="main-content">
            <NavigationBar setActiveComponent={setActiveComponent} />
            <div className="component-container">
                {activeComponent === 'add' && <AddComponent addItem={addItem} items={items} />}
                {activeComponent === 'view' && (
                    <>
                        <ViewComponent
                            items={items}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            onEdit={handleEditItem}
                            onDelete={(index) => setItems(items.filter((_, i) => i !== index))}
                        />
                        {isEditing && (
                            <EditModal
                                item={items[currentIndex]}
                                onUpdate={handleUpdateItem}
                                onClose={() => setIsEditing(false)}
                            />
                        )}
                    </>
                )}
                {activeComponent === 'delete' && (
                    <DeleteComponent
                        items={items}
                        selectedItems={selectedItems}
                        toggleSelect={toggleSelect}
                        confirmDelete={confirmDelete}
                    />
                )}
      </div>

           
        </div>
    );
};

export default MainContent;
