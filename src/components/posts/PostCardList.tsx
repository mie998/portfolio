import React, { FC } from 'react';

import PostCard from './PostCard';
import { Post } from './data/posts';

type Props = {
  posts: Post[];
  isLoading?: boolean;
};

const PostCardList: FC<Props> = ({ posts = [], isLoading = false }) => (
  <>
    {posts.map((post) => (
      <>
        <PostCard post={post} isLoading={isLoading} />
      </>
    ))}
  </>
);

export default PostCardList;
