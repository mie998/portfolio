import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';

import PostCardList from './PostCardList';
import { Post, postsData } from './data/posts';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '4rem',
    fontFamily: 'Anton, sans-serif',
    textAlign: 'center',
    margin: '1rem auto',
  },
}));

const AllPosts: FC = () => {
  const classes = useStyles();
  const { search } = useLocation();
  const isLoading = !!parse(search)?.loading;
  const posts = postsData.sort((a, b) => a.date - b.date);

  return (
    <>
      <Helmet>
        <title>投稿一覧</title>
      </Helmet>
      <div id="all-posts" className="content-wrapper">
        <h2 className={classes.title}>投稿一覧</h2>
        <PostCardList posts={posts} isLoading={isLoading} />
      </div>
    </>
  );
};

export default AllPosts;
