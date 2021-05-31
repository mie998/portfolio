import React from 'react';
import { Helmet } from 'react-helmet';

import About from './About';
import MenuButton from './MenuButton';
import History from './Experiences';
import Skill from './Skill';
import Top from './Top';
import Works from './Works';
import Footer from './Footer';
import RecentPosts from './posts/List/RecentPosts';

import { useCommonStyles } from './styles/commonStyle';
import { Box } from '@material-ui/core';

const Home: React.FC = () => {
  const commonClasses = useCommonStyles();

  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <Box className={commonClasses.container}>
        <Top />
        <MenuButton />
        <About />
        <History />
        <Skill />
        <Works />
        <RecentPosts />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
