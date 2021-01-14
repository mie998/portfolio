import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import PostCardList from './PostCardList';
import { Post, postsData } from './data/posts';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '4rem',
    fontFamily: 'Anton, sans-serif',
    textAlign: 'center',
    margin: '1rem auto',
  },
  cardWrapperRoot: {
    width: '50%',
    margin: '1rem auto',
  },
  readMore: {
    fontSize: '1.2rem',
    float: 'right',
  },
}));

const RecentPosts: FC = () => {
  const classes = useStyles();
  const { search } = useLocation();
  const isLoading = !!parse(search)?.loading;
  const raw_posts = postsData.sort((a, b) => (a > b ? 1 : -1));
  const range = (start: number, end: number) =>
    [...new Array(end - start).keys()].map((n) => n + start);
  const posts = range(0, Math.min(raw_posts.length, 5)).map(
    (i) => raw_posts[i],
  );

  return (
    <>
      <div id="all-posts" className="content-wrapper">
        <h2 className={classes.title}>Recent Posts</h2>
        <PostCardList posts={posts} isLoading={isLoading} />
        <div className={classes.cardWrapperRoot}>
          <Button
            className={classes.readMore}
            variant="contained"
            color="primary"
          >
            {'>>'} Read More!
          </Button>
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
