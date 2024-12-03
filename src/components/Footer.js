import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <pre>©{new Date().getFullYear()} To Do Task List.</pre>
        </footer>
    );
};

export default Footer;
