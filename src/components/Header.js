import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    // State to track whether the screen is in mobile view or not
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener to handle resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="app-header" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Conditional rendering based on screen size */}
            {isMobile ? (
                <img 
                    src="https://germanna.edu/themes/custom/germanna/assets/images/germanna-white-mobile.svg" 
                    alt="germanna Logo" 
                    className="germanna-logo" 
                    style={{ height: '30px', width: '30px', marginRight: '10px' }} 
                />
            ) : (
                <img 
                    src="https://germanna.edu/sites/default/files/2023-12/germanna-logogermana_logo.png" 
                    alt="germanna Logo" 
                    className="germanna-logo" 
                    style={{ height: '30px', width: '250px', marginRight: '10px' }} 
                />
            )}
            <div className="app-title">Germanna Interview Task</div>
        </header>
    );
};

export default Header;
