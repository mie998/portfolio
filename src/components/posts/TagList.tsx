import React, { FC } from 'react';

import { Post, postsData } from './data/posts';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  topics: {
    color: 'white',
  },
  tag: {
    color: 'white',
  },
}));

const TagList: FC = () => {
  const classes = useStyles();
  const tags = postsData
    .map((post: Post) => post.tag)
    .filter((x, i, self) => self.indexOf(x) === i);

  return (
    <>
      <aside>
        <h3>topics</h3>
        <List as="ul">
          {tags.map((tag) => (
            <List.Item as="li">
              <Link to={`/posts/tags/${tag}`}>{tag}</Link>
            </List.Item>
          ))}
        </List>
      </aside>
    </>
  );
};

export default TagList;
