import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'
// import ReactMarkdown from 'react-markdown/with-html';
import { Navigate, useLocation, useParams, Link } from 'react-router-dom';
import gfm from 'remark-gfm';
import { Post, postsData } from './data/posts';

const useStyles = makeStyles({
  articleWrapper: {
    textAlign: 'center',
    padding: '5rem 15rem'
  },
  articleTitle: {
    marginTop: '3rem',
    color: 'white',
    lineHeight: '1.4em',
    fontSize: '3rem',
  },
  articleSuffix: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  articleSuffixItem: {
    fontSize: '1rem',
    margin: '.8rem .5em',
    color: 'rgb(200, 200, 200)',
  },
  articleMainContainer: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 .5rem 1rem black',
    margin: '1rem 0',
  },
  articleMainWrapper: {
    padding: '0.8rem 2.5rem',
    textAlign: 'left',
  },
  articleMain: {
    fontSize: '1.2rem',
    lineHeight: '1.4rem',
    wordWrap: 'break-word'
  }
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
        <div className={classes.articleSuffix}>
          <div className={classes.articleSuffixItem}>投稿日時: {post.date}</div>
          <div className={classes.articleSuffixItem}>tag: <Link to={"/posts/tags/" + post.tag}>{post.tag}</Link></div>
        </div>
        <div className={classes.articleMainContainer}>
          <div className={classes.articleMainWrapper}>
            <ReactMarkdown className={classes.articleMain} plugins={[gfm]} children={post.body} />
          </div>
        </div>
      </div>
    )
  }
};

export default DescribePost;
