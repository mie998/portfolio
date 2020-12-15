import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import PostCardList from './PostCardList';
import { Post } from './data/posts';

type Props = {
  posts?: Post[];
  tag?: string;
  isLoading?: boolean;
};

const TagPosts: FC<Props> = ({ posts = [], tag = '', isLoading = false }) => (
  <>
    <Helmet>
      <title>{tag}タグの投稿一覧</title>
    </Helmet>
    <PostCardList posts={posts} isLoading={isLoading} />
  </>
);

export default TagPosts;
