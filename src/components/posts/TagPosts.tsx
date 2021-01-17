import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';

import PostCardList from './PostCardList';
import TagList from './TagList';
import { Post, postsData } from './data/posts';

const useStyles = makeStyles(() => ({
  Wrapper: {
    display: 'flex',
    width: '80%',
    margin: '5rem auto',
  },
  tagTitle: {
    fontSize: '2rem',
    fontFamily: 'Anton, sans-serif',
    textAlign: 'center',
    color: '',
  },
  articleListContainer: {
    width: '80%',
    borderRadius: '.5rem',
    backgroundColor: 'white',
    boxShadow: '0 .5rem 1rem black',
    '& > div': {
      '& > div': {
        border: '1px solid #dedede',
      },
    },
  },
  cardListContainer: {
    width: '90%',
    margin: '1rem auto',
  },
  SidebarWrapper: {
    marginLeft: '2rem',
    width: '20%',
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
        <div className={classes.Wrapper}>
          <div className={classes.articleListContainer}>
            <h3 className={classes.tagTitle}>#{tagName}</h3>
            <div className={classes.cardListContainer}>
              <PostCardList posts={posts} isLoading={isLoading} />
            </div>
          </div>
          <div className={classes.SidebarWrapper}>
            <TagList />
          </div>
        </div>
      </>
    );
  }
};

export default TagPosts;
