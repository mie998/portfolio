import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { makeStyles, Box } from '@material-ui/core';
import { useCommonStyles } from './styles/commonStyle';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
  postComponentContainer: {
    paddingTop: '3.4rem',
  },
}));

const Posts: FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <>
      <Helmet>
        <title>POST</title>
      </Helmet>
      <Box className={commonClasses.container}>
        {/* <Header /> */}
        <div className={classes.postComponentContainer}>
          <Outlet />
        </div>
        <Footer />
      </Box>
    </>
  );
};

export default Posts;
