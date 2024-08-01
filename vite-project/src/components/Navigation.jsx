import React from 'react';
import '../style.css';

const Navigation = () => {
    return (
        <div className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    );
};

export default Navigation;