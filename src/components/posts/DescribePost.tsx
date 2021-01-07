import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown/with-html';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import gfm from 'remark-gfm';
import { Post, postsData } from './data/posts';

const useStyles = makeStyles({
  articleWrapper: {
    textAlign: 'center',
    padding: '1rem 15rem'
  },
  articleTitle: {
    marginTop: '3rem',
    color: 'white',
    fontSize: '3rem',
  },
  articleSuffix: {
    display: 'flex',
    color: 'white',
    fontSize: '3rem',
    'p': {
      color: 'white'
    }
  },
  articleMain: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '0rem 1rem',
    boxShadow: '0 .5rem 1rem black',
    fontSize: '100px',
    // width: '80%'
  },
});

const DescribePost: FC = () => {
  const classes = useStyles();
  const { postId } = useParams();
  const postFilteredById = postsData.filter(post => post.id === postId);

  if (postFilteredById.length !== 1) {
    return (
      <></>
    )
  } else {
    const post: Post = postFilteredById[0]

    return (
      <div className={classes.articleWrapper}>
        <h2 className={classes.articleTitle}>{post.title}</h2>
        <div className={classes.articleWrapper}>
          <p>投稿日時: {post.date}</p>
          <p>tag: {post.tag}</p>
        </div>
        <div className={classes.articleMain}>
          <ReactMarkdown plugins={[gfm]} source={post.body} escapeHtml={false} />
        </div>
      </div>
    )
  }
};

export default DescribePost;
