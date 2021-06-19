import React, { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { useCommonStyles } from '../../styles/commonStyle';
import { Button, Box } from '@material-ui/core';

import PostCardList from '../PostCardList';
import { postsData } from '../data/posts';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '4rem',
    fontFamily: 'Anton, sans-serif',
    textAlign: 'center',
    margin: '1rem auto',
  },
  cardWrapperRoot: {
    width: '70%',
    margin: '1rem auto',
  },
  readMoreButton: {
    fontSize: '1.2rem',
    backgroundColor: theme.palette.primary.main,
    /* stylelint-disable */
    float: 'right',
    /* stylelint-enable */

    '& > span': {
      color: theme.palette.secondary.dark,
    },
  },
}));

const RecentPosts: FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const { search } = useLocation();
  const isLoading = !!parse(search)?.loading;
  const raw_posts = postsData.sort((a, b) => (a.date > b.date ? -1 : 1));
  const range = (start: number, end: number) =>
    [...new Array(end - start).keys()].map((n) => n + start);
  const posts = range(0, Math.min(raw_posts.length, 5)).map(
    (i) => raw_posts[i],
  );

  return (
    <Box className={commonClasses.contentWrapper}>
      <h2 className={commonClasses.title}>Recent Posts</h2>
      <div className={classes.cardWrapperRoot}>
        <PostCardList posts={posts} isLoading={isLoading} />
        <Link to={`/posts/`}>
          <Button
            className={classes.readMoreButton}
            variant="contained"
            color="primary"
          >
            {'>>'} Read More!
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default RecentPosts;
