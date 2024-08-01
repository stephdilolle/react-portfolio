// src/App.jsx
import React from 'react';
import Navbar from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './style.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <Home />
                <Projects />
                <About />
                <Contact />
            </div>
        </div>
    );
}

export default App;
