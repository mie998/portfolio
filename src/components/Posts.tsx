import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import HomeButton from './common/HomeButton';
import './styles/mixin.scss';

const Posts: FC = () => (
  <>
    <Helmet>
      <title>POST</title>
    </Helmet>
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </>
);

export default Posts;
