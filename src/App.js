import React from 'react';
import './components/styles/App.scss';
import Header from './components/Header';
import About from './components/About';
import History from './components/History';
import Skill from './components/Skill';
import Top from './components/Top';
import Works from './components/Works';
import Footer from './components/Footer';

function App() {
    return (
        <div class="container">
            <Header />
            <Top />
            <About />
            <History />
            <Skill />
            <Works />
            <Footer />
        </div>
    );
}

export default App;
