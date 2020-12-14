import React, { FC } from 'react';
import { render } from 'react-dom';
import { Icon, Item } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Spinner from '../common/Spinner';
import { Post } from './data/posts';

type Props = {
  post: Post;
  isLoading?: boolean;
};

const Post: FC<Props> = ({ post, isLoading = false }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      render(
        <ReactMarkdown plugins={[gfm]} children={post.body} />,
        document.body,
      )
    )}
  </>
);

export default Post;
