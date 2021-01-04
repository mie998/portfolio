import React, { FC } from 'react';
import { render } from 'react-dom';
import { Icon, Item } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown/with-html';
import gfm from 'remark-gfm';
import Spinner from '../common/Spinner';
import { Post } from './data/posts';
import PostCard from './PostCard';

type Props = {
  post?: Post;
  isLoading?: boolean;
};

const getHTMLfromMarkdown = (markdown: string | undefined): string => {
  if (markdown)
    return markdown
  else
    return 'markdown not found!!'
};

const DescribePost: FC<Props> = ({ post = {}, isLoading = false }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      <>
        <ReactMarkdown plugins={[gfm]} source={getHTMLfromMarkdown(post?.body)} escapeHtml={false}/>,
      </>
    )}
  </>
);

export default DescribePost;
