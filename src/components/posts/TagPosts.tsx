import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';

import PostCardList from './PostCardList';
import TagList from './TagList';
import { Post, postsData } from './data/posts';

const useStyles = makeStyles(() => ({
  tagTitle: {
    fontSize: '2rem',
    fontFamily: 'Anton, sans-serif',
    textAlign: 'center',
    color: 'white',
  },
  articleWrapper: {
    display: 'flex',
    boxSizing: 'inherit',
    width: '80%',
    margin: '3rem auto',
  },
  articleMainWrapper: {
    width: '80%',
    marginRight: '2rem',
  },
  articleSidebarWrapper: {
    margin: 'auto',
    width: '20%',
  },
  articleSidebarContents: {
    borderRadius: '.2rem',
    marginTop: '0',
    paddingTop: '0',
    backgroundColor: 'white',
  },
}));

const TagPosts: FC = () => {
  const classes = useStyles();
  const { tagCode } = useParams();
  const { search } = useLocation();
  const isLoading = !!parse(search)?.loading;
  const postsDataFilteredByTagCode: Post[] = postsData.filter(
    (post) => post.tag === tagCode,
  );

  if (postsDataFilteredByTagCode.length === 0) {
    return <Navigate to="/posts/" replace />;
  } else {
    const tagName = tagCode;
    const posts = postsDataFilteredByTagCode;
    return (
      <>
        <Helmet>
          <title>{tagName}タグの投稿一覧</title>
        </Helmet>
        <div className={classes.articleWrapper}>
          <div className={classes.articleMainWrapper}>
            <h3 className={classes.tagTitle}>#{tagName}</h3>
            <PostCardList posts={posts} isLoading={isLoading} />
          </div>
          <div className={classes.articleSidebarWrapper}>
            <div className={classes.articleSidebarContents}>
              <TagList />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default TagPosts;
