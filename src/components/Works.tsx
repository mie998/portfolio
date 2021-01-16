import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Grid, { GridProps } from '@material-ui/core/Grid';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { useWindowDimensions } from './common/UsefulHooks';
import polyImg from './images/polygon2.jpg';

const smartPhoneSizeMedium = 420;
const smartPhoneSizeSmall = 320;
interface Contents {
  key: string;
  url: string;
  description: string;
  img: string;
}

const useStyles = makeStyles((theme) => ({
  ref: {
    textDecoration: 'none',
    '&:hover': {
      opacity: '0.5',
    },
  },
  cardContainer: {
    textAlign: 'center',
    maxWidth: '100%',
  },
  cardDescription: {},
  noCardDescription: {
    display: 'None',
  },
  largeCard: {
    display: 'flex',
    width: '25rem',
    height: '10rem',
    // transition: 'box-shadow 1s',
    '&:hover': {
      // boxShadow: '0 1rem 1rem gray',
    },
  },
  mediumCard: {
    display: 'flex',
    width: '20rem',
    height: '8rem',
  },
  smallCard: {
    display: 'flex',
    width: '15rem',
    height: '5rem',
  },
  cover: { width: '100%' },
}));

const Works: React.FC = () => {
  const classes = useStyles();
  const data: Contents[] = [
    {
      key: 'portfolio',
      url: 'https://mie998.github.io/portfolio/',
      description: '自身のポートフォリオサイト. React, TypeScript などを使用.',
      img: polyImg,
    },
  ];
  const { width, height } = useWindowDimensions();

  const table_contents = data.map((item) => (
    <Grid item xl key={item.key}>
      <a href={item.url} className={classes.ref}>
        <Card
          className={
            width > smartPhoneSizeMedium
              ? classes.largeCard
              : width > smartPhoneSizeSmall
              ? classes.mediumCard
              : classes.smallCard
          }
        >
          <CardContent>
            <Typography component="h5" variant="h5">
              {item.key}
            </Typography>
            <Typography
              component="h6"
              variant="subtitle1"
              color="textSecondary"
              className={
                width < smartPhoneSizeMedium
                  ? classes.noCardDescription
                  : classes.cardDescription
              }
            >
              {item.description}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.cover}
            image={item.img}
            title="portfolio"
          ></CardMedia>
        </Card>
      </a>
    </Grid>
  ));

  return (
    <div id="works" className="content-wrapper">
      <h2 className="title">Works</h2>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={classes.cardContainer}
      >
        {table_contents}
      </Grid>
    </div>
  );
};

export default Works;
