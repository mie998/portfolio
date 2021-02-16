import React, { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import ReactGA from 'react-ga';
import { makeStyles } from '@material-ui/core/styles';

import Home from './components/Home';
import Posts from './components/Posts';
import AllPosts from './components/posts/AllPosts';
import TagPosts from './components/posts/TagPosts';
import DescribePost from './components/posts/DescribePost';

const useStyles = makeStyles(() => ({
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

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
      <Routes basename="/portfolio">
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
