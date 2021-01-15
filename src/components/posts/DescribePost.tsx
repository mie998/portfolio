import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Navigate, useLocation, useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
} from 'react-share';

import { Post, postsData } from './data/posts';

const useStyles = makeStyles({
  articleWrapper: {
    textAlign: 'center',
    padding: '5rem 15rem',
  },
  articleTitle: {
    marginTop: '3rem',
    color: 'white',
    lineHeight: '1.4em',
    fontSize: '3rem',
    fontFamily:
      '"Segoe UI", "Helvetica Neue", "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif',
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
    lineHeight: '1.6rem',
    wordWrap: 'break-word',
    fontFamily:
      'SFMono-Regular",Consolas,"Liberation Mono",Menlo,monospace,"Segoe UI Emoji',
    '& > h1': {
      borderBottom: '1px solid rgba(155,155,155,.7);',
      marginBottom: '1rem',
      lineHeight: '4rem',
      fontSize: '2.5rem',
      fontFamily: 'Anton, sans-serif;',
    },
    '& > h2': {
      marginBottom: '.5rem',
      lineHeight: '3rem',
      fontSize: '2rem',
      fontFamily: 'Anton, sans-serif;',
    },
    '& > p': {
      '& > img': {
        maxWidth: '100%',
      },
    },
    '& > pre': {
      backgroundColor: '#272822',
      color: '#fff',
      borderRadius: '.5rem',
      padding: '1rem',
      display: 'block',
      overflow: 'auto',
      '& > code': {
        fontSize: '1rem',
        fontFamily:
          'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      },
    },
  },
  articleShareButton: {
    display: 'flex-center',
    padding: '1rem 0',
    '& > button': {
      margin: '0 1rem',
      '&:hover': {
        color: 'black',
      },
    },
  },
});

const DescribePost: FC = () => {
  const classes = useStyles();
  const { postId } = useParams();
  const postFilteredById = postsData.filter((post) => post.id === postId);
  const preElement = document.querySelector('pre');

  if (postFilteredById.length !== 1) {
    return <></>;
  } else {
    const post: Post = postFilteredById[0];

    return (
      <div className={classes.articleWrapper}>
        <h2 className={classes.articleTitle}>{post.title}</h2>
        <div className={classes.articleSuffix}>
          <div className={classes.articleSuffixItem}>投稿日時: {post.date}</div>
          <div className={classes.articleSuffixItem}>
            tag: <Link to={'/posts/tags/' + post.tag}>{post.tag}</Link>
          </div>
        </div>
        <div className={classes.articleMainContainer}>
          <div className={classes.articleMainWrapper}>
            <ReactMarkdown
              className={classes.articleMain}
              plugins={[gfm]}
              children={post.body}
            />
          </div>
          <div className={classes.articleShareButton}>
            <FacebookShareButton
              url={`https://mie998.github.io/portfolio/posts/${post.id}`}
              title={post.title}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://mie998.github.io/portfolio/posts/${post.id}`}
              title={post.title}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
            <HatenaShareButton
              url={`https://mie998.github.io/portfolio/posts/${post.id}`}
              title={post.title}
            >
              <HatenaIcon size={50} round />
            </HatenaShareButton>
            <LineShareButton
              url={`https://mie998.github.io/portfolio/posts/${post.id}`}
              title={post.title}
            >
              <LineIcon size={50} round />
            </LineShareButton>
          </div>
        </div>
      </div>
    );
  }
};

export default DescribePost;
