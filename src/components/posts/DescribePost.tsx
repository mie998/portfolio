import React, { FC } from 'react';
import { render } from 'react-dom';
import { Icon, Item } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown/with-html';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import gfm from 'remark-gfm';
import Spinner from '../common/Spinner';
import { Post, postsData } from './data/posts';


const getMarkdownFromPostsData = (posts: Post[]) => {
  if (posts.length !== 1)
    return 'markdown not found!!'
  else
    return posts[0].body
};

const DescribePost: FC = () => {
  const { postId } = useParams();
  const postFilteredById = postsData.filter(post => post.id === postId);

  return (
  <div id="discribe" className="content-wrapper">
    <ReactMarkdown plugins={[gfm]} source={getMarkdownFromPostsData(postFilteredById)} escapeHtml={false}/>,
  </div>
  )
};

export default DescribePost;
