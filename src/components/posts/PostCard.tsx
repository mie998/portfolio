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

const useStyles = makeStyles({
  root: {
    margin: '1rem auto',
  },
  tagButton: {},
  readMore: {
    float: 'right',
    marginRight: '1rem',
  },
});

const PostCard: FC<Props> = ({ post = {}, isLoading = false }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h4">{post.title}</Typography>
          <CardActions className={classes.tagButton}>
            <Button size="medium">
              <Link to={`/posts/tags/${post.tag}`}>#{post.tag}</Link>
            </Button>
          </CardActions>
          <Typography variant="body1" component="p" display="inline">
            {post.date}
          </Typography>
          <CardActions className={classes.readMore}>
            <Button size="large">
              <Link to={`/posts/${post.id}`}>この記事を読む</Link>
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default PostCard;
