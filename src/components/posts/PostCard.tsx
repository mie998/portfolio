import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Post } from './data/posts';

type Props = {
  post: Post;
  isLoading?: boolean;
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem auto',
  },
  tagButtonWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  tagButton: {
    margin: '0 .5rem .5rem 0',
    padding: '0 .5rem 0 .5rem',
    lineHeight: '1.8rem',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '.3rem',
    '& > span': {
      '& > a': {
        textDecoration: 'none',
        color: theme.palette.secondary.light,
      },
    },
  },
  readMoreButtonWrapper: {
    /* stylelint-disable */
    float: 'right',
    /* stylelint-enable */
  },
  readMoreButton: {
    backgroundColor: theme.palette.primary.light,
    '& > span': {
      '& > a': {
        textDecoration: 'none',
        color: theme.palette.secondary.light,
      },
    },
  },
}));

const PostCard: FC<Props> = ({ post = {}, isLoading = false }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h4">{post.title}</Typography>
          <CardActions>
            <div className={classes.tagButtonWrapper}>
              {post.tag?.map((item) => (
                <Button
                  className={classes.tagButton}
                  variant="contained"
                  size="small"
                  disableElevation
                >
                  <Link to={`/portfolio/posts/tags/${item}`}>#{item}</Link>
                </Button>
              ))}
            </div>
          </CardActions>
          <Typography variant="body1" component="p" display="inline">
            {post.date}
          </Typography>
          <CardActions className={classes.readMoreButtonWrapper}>
            <Button size="large" className={classes.readMoreButton}>
              <Link to={`/portfolio/posts/${post.id}`}>この記事を読む</Link>
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default PostCard;
