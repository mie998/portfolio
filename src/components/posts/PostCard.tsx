import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import DescribePost from './DescribePost';
import { Post } from './data/posts';

type Props = {
  post: Post;
  isLoading?: boolean;
};

const PostCard: FC<Props> = ({ post = {}, isLoading = false }) => (
  <>
    <Link to={`Posts/${post.id}`}>{post.title}</Link>
  </>
);

export default PostCard;
