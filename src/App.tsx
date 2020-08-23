import React from 'react';
import './components/mixin.scss';
import Header from './components/Header';
import About from './components/About';
import History from './components/Experiences';
import Skill from './components/Skill';
import Top from './components/Top';
import Works from './components/Works';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <Top />
            <About />
            <History />
            <Skill />
            <Works />
            <Footer />
        </div>
    );
};

export default App;
