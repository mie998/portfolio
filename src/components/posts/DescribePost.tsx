import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import ReactMarkdownHeading from 'react-markdown-heading';
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

import CodeBlock from './CodeBlock';
import TagList from './TagList';
import { Post, postsData } from './data/posts';

const useStyles = makeStyles((theme) => ({
  articleWrapper: {
    textAlign: 'center',
    margin: '5rem auto',
    width: '80%',
    height: '100%',
    fontFamily: "'Open Sans', sans-serif'",
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  articleContainer: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  articleTitle: {
    margin: '3rem 1rem 0 0',
    color: 'white',
    lineHeight: '1.4em',
    fontSize: '3rem',
  },
  articleSuffix: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  articleSuffixItem: {
    fontSize: '1rem',
    margin: '.8rem .5em',
    color: 'rgb(200, 200, 200)',
    '& > a': {
      textDecoration: 'none',
      color: 'rgb(200, 200, 200)',
      '&:hover': {
        color: 'white',
      },
    },
  },
  articleMainContainer: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 .5rem 1rem black',
    width: '75%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  articleMainWrapper: {
    padding: '0.8rem 2.5rem',
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 1.4rem',
    },
  },
  articleMain: {
    fontSize: '1.1rem',
    lineHeight: '2rem',
    color: '#3b3b3b',
    wordWrap: 'break-word',
    '& > h1': {
      borderBottom: '1px solid rgba(155,155,155,.7);',
      marginBottom: '1rem',
      lineHeight: '3rem',
      fontSize: '2rem',
      fontFamily: 'Anton, sans-serif;',
    },
    '& > h2': {
      marginBottom: '1rem',
      lineHeight: '2rem',
      fontSize: '1.5rem',
      fontFamily: 'Anton, sans-serif;',
    },
    '& > p': {
      '& > a': {
        textDecoration: 'none',
        '&:hover': {
          color: '#525252',
        },
      },
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
        fontFamily: 'Monaco',
      },
    },
  },
  articleShareButton: {
    width: '90%',
    padding: '1.5rem 0',
    margin: '1rem auto 0',
    '& > p': {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, 0.6)',
    },
    '& > button': {
      margin: '0 1rem',
      '&:hover': {
        color: 'black',
      },
    },
  },
  articleSideBarContainer: {
    width: '20%',
    marginLeft: '2rem',
    display: 'unset',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  articleSideBarContent: {
    backgroundColor: 'white',
    borderRadius: '.5rem',
    textAlign: 'left',
    marginBottom: '2rem',
  },
  articleSmartphoneSuffixContainer: {
    backgroundColor: 'white',
    borderRadius: '.5rem',
  },
  articleSmartphoneSuffixContent: {},
  articleSmartphoneSuffixTOC: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      color: 'white',
      textAlign: 'left',
      padding: '.2rem 0',
      margin: '0 0 1rem 0',
      border: '1px solid white',
      borderRadius: '.5rem',
      '& > p': {
        fontWeight: '900',
        fontSize: '1.3rem',
        margin: '.2rem .5rem',
      },
      '& > ul': {
        margin: '0 auto',
        '& > li': {
          lineHeight: '1.5rem',
          textDecoration: 'none',
        },
      },
    },
  },
  articleTOC: {
    color: 'white',
    textAlign: 'left',
    position: 'sticky',
    top: '10rem',
    padding: '.2rem 0',
    '& > p': {
      fontWeight: '900',
      fontSize: '1.3rem',
      margin: '.2rem .5rem',
    },
    '& > ul': {
      margin: '0 auto',
      '& > li': {
        lineHeight: '1.5rem',
        textDecoration: 'none',
      },
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

const DescribePost: FC = () => {
  const classes = useStyles();
  const { postId } = useParams();
  const postFilteredById = postsData.filter((post) => post.id === postId);

  if (postFilteredById.length !== 1) {
    return <></>;
  } else {
    const post: Post = postFilteredById[0];

    return (
      <>
        <Helmet>
          <title>{post.title}</title>
        </Helmet>
        <Box className={classes.articleWrapper}>
          <h2 className={classes.articleTitle}>{post.title}</h2>
          <Box className={classes.articleSuffix}>
            <Box className={classes.articleSuffixItem}>
              <i className="fa fa-clock-o"></i> {post.date}
            </Box>
            {post.tag.map((item) => (
              <Box className={classes.articleSuffixItem}>
                <Link to={'/portfolio/posts/tags/' + item}>#{item}</Link>
              </Box>
            ))}
          </Box>
          <Box className={classes.articleContainer}>
            <Box className={classes.articleSmartphoneSuffixTOC}>
              <p>目次</p>
              <ReactMarkdownHeading markdown={post.body} />
            </Box>
            <Box className={classes.articleMainContainer}>
              <Box className={classes.articleMainWrapper}>
                <ReactMarkdown
                  className={classes.articleMain}
                  plugins={[gfm]}
                  children={post.body}
                  allowDangerousHtml
                  renderers={{ code: CodeBlock }}
                />
              </Box>
              <Box className={classes.articleShareButton}>
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
              </Box>
            </Box>
            <Box className={classes.articleSideBarContainer}>
              <Box className={classes.articleSideBarContent}>
                <TagList />
              </Box>
              <Box className={classes.articleTOC}>
                <p>目次</p>
                <ReactMarkdownHeading markdown={post.body} />
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
};

export default DescribePost;
