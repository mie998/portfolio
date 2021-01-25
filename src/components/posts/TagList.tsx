import React, { FC } from 'react';

import { Post, postsData } from './data/posts';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    padding: '.5rem',
    backgroundColor: 'white',
    borderRadius: '.2rem',
    boxShadow: '0 .2rem .5rem black',
  },
  tagListWrapper: {
    margin: '.3rem',
    '& > p': {
      fontWeight: '900',
      fontSize: '1.3rem',
      margin: '.2rem 0rem .5rem',
    },
  },
  tagList: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    '& > span': {
      margin: '0 .5rem .5rem 0',
      padding: '0 .5rem 0 .5rem',
      lineHeight: '1.5rem',
      backgroundColor: '#ebebeb',
      borderRadius: '.3rem',
      '& > a': {
        fontSize: '.8rem',
        textDecoration: 'none',
        color: '#3273dc',
        '&:hover': {
          color: '#4a4a4a',
          cursor: 'pointer',
        },
      },
    },
  },
});

const TagList: FC = () => {
  const classes = useStyles();
  const tags = postsData
    .map((post: Post) => post.tag)
    .flat()
    .filter((x, i, self) => self.indexOf(x) === i);

  return (
    <>
      <aside className={classes.wrapper}>
        <div className={classes.tagListWrapper}>
          <p>topics</p>
          <div className={classes.tagList}>
            {tags.map((tag) => (
              <span>
                <Link to={`/portfolio/posts/tags/${tag}`}>#{tag}</Link>
              </span>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default TagList;
