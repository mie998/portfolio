import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import About from './About';
import History from './Experiences';
import Skill from './Skill';
import Top from './Top';
import Works from './Works';
import Footer from './Footer';
import RecentPosts from './posts/RecentPosts';

import './styles/mixin.scss';

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
        <RecentPosts />
        <Footer />
      </div>
    </>
  );
};

export default Home;
