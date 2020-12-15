import React, { FC } from 'react';

import { postsData } from './data/posts';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

const TagList: FC = () => {
  const tags = Object.keys(postsData).map((tagCode) => ({
    tagCode,
    name: postsData[tagCode].tagName,
  }));

  return (
    <>
      <h2>タグ一覧</h2>
      <List as="ul">
        {tags.map((tag) => (
          <List.Item as="li" key={tag}>
            <Link to={`/posts/${tag}`}>{tag}</Link>
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default TagList;
