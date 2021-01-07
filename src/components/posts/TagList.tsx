import React, { FC } from 'react';

import { Post, postsData } from './data/posts';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import { Outlet } from 'react-router-dom';

const TagList: FC = () => {
  const tags = postsData
    .map((post: Post) => (post.tag))
    .filter((x, i, self) => self.indexOf(x) === i);

  return (
    <>
      <Helmet>
        <title>タグ一覧</title>
      </Helmet>
      <div id="tag-posts" className="content-wrapper">
        <h2>タグ一覧</h2>
        <List as="ul">
          {tags.map((tag) => (
            <List.Item as="li">
              <Link to={`/posts/tags/${tag}`}>{tag}</Link>
            </List.Item>
          ))}
        </List>
        <Outlet/>
      </div>
    </>
  );
};

export default TagList;
