import React, { FC, useEffect } from 'react';
import ReactGA from 'react-ga';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

import Home from './components/Home';
import Posts from './components/Posts';
import AllPosts from './components/posts/List/AllPosts';
import TagPosts from './components/posts/List/TagPosts';
import DescribePost from './components/posts/blogPosts/DescribePost';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.grey[50],
  },
}));

const gaMeasurementId = process.env.REACT_APP_GA_MEASUREMENT_ID || '';
ReactGA.initialize(gaMeasurementId);

const App: FC = () => {
  const classes = useStyles();
  const location = useLocation();

  // SPA scroll improvement
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  // Google Analytics
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location.key]);

  return (
    <div className={classes.wrapper}>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="/" element={<AllPosts />} />
          <Route path="tags">
            <Route path=":tagCode" element={<TagPosts />} />
          </Route>
          <Route path=":postId" element={<DescribePost />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>
    </div>
  );
};

export default App;
