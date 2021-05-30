import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useCommonStyles } from './styles/commonStyle';
import { Grid, Box, Card, CardContent, Typography } from '@material-ui/core';

interface Contents {
  key: string;
  url: string;
  description: string;
  tools: string[];
}

const useStyles = makeStyles((theme) => ({
  ref: {
    textDecoration: 'none',
    '&:hover': {
      opacity: '0.5',
    },
  },
  cardContainer: {
    maxWidth: '100%',
  },
  cardStyle: {
    display: 'flex',
  },
  cardTitle: {},
  cardDescription: {
    paddingTop: '.4rem',
  },
  cardUsedTechs: {
    paddingTop: '.4rem',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  cardUsedTechsItem: {
    padding: '.2rem',
    marginRight: '.3rem',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '.3rem',
  },
}));

const Works: React.FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const data: Contents[] = [
    {
      key: 'portfolio',
      url: 'https://mie998.github.io/portfolio/',
      description:
        '自身のポートフォリオサイト. 自己紹介を含め,react-routerにてルーティングを行ったブログ機能も追加してある.ブログもちょくちょく投稿しているのでぜひみてください！！',
      tools: ['reactDOM', 'react-router', 'MaterialUI', 'TypeScript'],
    },
    {
      key: 'latex-template',
      url: 'https://github.com/mie998/texlive_ja_template',
      description:
        'tex を docker コンテナで手軽に扱えるテンプレート。自動で diff.pdf を作成したりと便利な機能をそろえている',
      tools: ['latex', 'docker', 'github-actions', 'vscode'],
    },
  ];

  const table_contents = data.map((item) => (
    <Grid item xs={8} sm={8} md={5} lg={5} key={item.key}>
      <a href={item.url} className={classes.ref}>
        <div className={classes.cardContainer}>
          <Card className={classes.cardStyle}>
            <CardContent>
              <Typography
                component="h4"
                variant="h4"
                className={classes.cardTitle}
              >
                {item.key}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary"
                className={classes.cardDescription}
              >
                {item.description}
              </Typography>
              <Box className={classes.cardUsedTechs}>
                {item.tools.map((tool) => {
                  return (
                    <Typography
                      variant="body1"
                      className={classes.cardUsedTechsItem}
                      key={tool}
                    >
                      {tool}
                    </Typography>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </div>
      </a>
    </Grid>
  ));

  return (
    <Box className={commonClasses.contentWrapper}>
      <h2 className={commonClasses.title}>Works</h2>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.cardContainer}
      >
        {table_contents}
      </Grid>
    </Box>
  );
};

export default Works;
