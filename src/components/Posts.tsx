import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
  postComponentContainer: {
    paddingTop: '3.4rem',
  },
}));

const Posts: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>POST</title>
      </Helmet>
      <div className="container">
        <Header />
        <div className={classes.postComponentContainer}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Posts;
