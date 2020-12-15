import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import PostCardList from './PostCardList';
import { Post } from './data/posts';

type Props = {
  posts?: Post[];
  isLoading?: boolean;
};

const AllPosts: FC<Props> = ({ posts = [], isLoading = false }) => (
  <>
    <Helmet>
      <title>投稿一覧</title>
    </Helmet>
    <PostCardList posts={posts} isLoading={isLoading} />
  </>
);

export default AllPosts;
