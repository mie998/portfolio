import React, { FC, useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';

import PostCardList from './PostCardList';
import { postsData } from './data/posts';
import { Button, Menu, MenuItem } from '@material-ui/core';

interface Sort {
  key: string;
  order: string;
}

const useStyles = makeStyles(() => ({
  allPostsTitle: {
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '3rem',
    fontFamily: 'Anton, sans-serif',
  },
  sortButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '70%',
    margin: '0 auto',
    '& > button': {
      backgroundColor: 'white',
    },
  },
  cardAdjust: {
    width: '70%',
    margin: '0 auto',
  },
}));

const AllPosts: FC = () => {
  const classes = useStyles();
  const { search } = useLocation();
  const isLoading = !!parse(search)?.loading;

  // sort
  const posts = postsData;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [sort, setSort] = useState<Sort>({ key: 'date', order: 'ASC' });
  const parsedDate = (date: string): number => parseInt(date.split('/').join());
  const sortedPosts = useMemo(() => {
    if (sort.key === 'title') {
      return posts.sort(
        (a, b) =>
          (a.title === b.title ? 0 : a.title > b.title ? 1 : -1) *
          (sort.order === 'ASC' ? 1 : -1),
      );
    } else if (sort.key === 'date') {
      return posts.sort(
        (a, b) =>
          (parsedDate(a.date) === parsedDate(b.date)
            ? 0
            : parsedDate(a.date) > parsedDate(b.date)
            ? 1
            : -1) * (sort.order === 'ASC' ? -1 : 1),
      );
    } else return posts;
  }, [sort]);

  // drawer event handler
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSort = (key: string, order: string) => {
    setAnchorEl(null);
    setSort({ ...sort, key: key, order: order });
  };

  return (
    <>
      <Helmet>
        <title>投稿一覧</title>
      </Helmet>
      <div id="all-posts" className="content-wrapper">
        <h2 className={classes.allPostsTitle}>過去投稿一覧</h2>
        <div className={classes.sortButtonWrapper}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <i className="fas fa-sort"></i>
            {'　'}sort by
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleSort('title', 'ASC')}>
              Title(ASC)
            </MenuItem>
            <MenuItem onClick={() => handleSort('title', 'DESC')}>
              Title(DESC)
            </MenuItem>
            <MenuItem onClick={() => handleSort('date', 'ASC')}>
              Date Added(newest)
            </MenuItem>
            <MenuItem onClick={() => handleSort('date', 'DESC')}>
              Date Added(oldest)
            </MenuItem>
          </Menu>
        </div>
        <div className={classes.cardAdjust}>
          <PostCardList posts={sortedPosts} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};

export default AllPosts;
