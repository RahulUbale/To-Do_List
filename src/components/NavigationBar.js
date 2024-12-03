import React, { useState, useEffect } from 'react';
import '../styles/NavigationBar.css'; // Ensure you're importing the CSS

const NavigationBar = ({ setActiveComponent }) => {
    const [isMinimized, setIsMinimized] = useState(window.innerWidth <= 768); // Initialize based on screen size

    useEffect(() => {
        // Function to handle resizing
        const handleResize = () => {
            setIsMinimized(window.innerWidth <= 768);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`navigation-bar ${isMinimized ? 'minimized' : ''}`}>
            {isMinimized ? (
                <div className="emoji-menu">
                    <button onClick={() => setActiveComponent('add')}>➕</button>
                    <button onClick={() => setActiveComponent('view')}>📋</button>
                    <button onClick={() => setActiveComponent('delete')}>🗑️</button>
                </div>
            ) : (
                <div className="full-menu">
                    <button onClick={() => setActiveComponent('add')}>➕ Add</button>
                    <button onClick={() => setActiveComponent('view')}>📋 View</button>
                    <button onClick={() => setActiveComponent('delete')}>🗑️ Delete</button>
                </div>
            )}
        </div>
    );
};

export default NavigationBar;
