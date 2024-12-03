import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="app-body">
            <MainContent />
            </div>
            <Footer />
        </div>
       

    );
}

export default App;
