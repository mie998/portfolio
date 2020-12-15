import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import PostCard from './PostCard';
import { Post } from './data/posts';

type Props = {
  posts: Post[];
  isLoading?: boolean;
};

const PostCardList: FC<Props> = ({ posts, isLoading = false }) => (
  <>
    <Helmet>
      <title>投稿一覧</title>
    </Helmet>
    {posts.map((post) => (
      <PostCard post={post} isLoading={isLoading} />
    ))}
  </>
);

export default PostCardList;
