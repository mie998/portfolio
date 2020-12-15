import React from 'react';
import { Helmet } from 'react-helmet';
import './styles/mixin.scss';
import Header from './Header';
import About from './About';
import History from './Experiences';
import Skill from './Skill';
import Top from './Top';
import Works from './Works';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <div className="container">
        <Header />
        <Top />
        <About />
        <History />
        <Skill />
        <Works />
        <Footer />
      </div>
    </>
  );
};

export default Home;