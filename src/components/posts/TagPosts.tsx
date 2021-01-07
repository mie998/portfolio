import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, useLocation, useParams } from 'react-router-dom';
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

const TagPosts: FC = () => {
  const classes = useStyles();
  const { tagCode } = useParams();
  const { search } = useLocation();
  const isLoading = !!parse(search)?.loading;
  const postsDataFilteredByTagCode: Post[] = postsData.filter(post => post.tag === tagCode)

  if (postsDataFilteredByTagCode.length === 0) {
    return <Navigate to="/posts/" replace />;
  } else {
    const tagName = tagCode
    const posts = postsDataFilteredByTagCode
    return (
      <>
        <Helmet>
          <title>{tagName}タグの投稿一覧</title>
        </Helmet>
        <div id="tag-posts" className="content-wrapper">
          <h2 className={classes.title}>{tagName}タグの投稿一覧</h2>
          <PostCardList posts={posts} isLoading={isLoading} />
        </div>
      </>
    );
  }
};

export default TagPosts;
