import React, { FC } from 'react';

import { Post, postsData } from './data/posts';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    padding: '.5rem 0',
    backgroundColor: 'white',
    borderRadius: '.2rem',
    boxShadow: '0 .2rem .5rem black',
  },
  tagList: {
    '& > p': {
      fontWeight: '900',
      fontSize: '1.3rem',
      margin: '.2rem .5rem',
    },
    '& > ul': {
      margin: '0 auto',
      '& > li': {
        lineHeight: '1.5rem',
        textDecoration: 'none',
      },
    },
  },
});

const TagList: FC = () => {
  const classes = useStyles();
  const tags = postsData
    .map((post: Post) => post.tag)
    .filter((x, i, self) => self.indexOf(x) === i);

  return (
    <>
      <aside className={classes.wrapper}>
        <div className={classes.tagList}>
          <p>topics</p>
          <ul>
            {tags.map((tag) => (
              <li>
                <Link to={`/posts/tags/${tag}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default TagList;
