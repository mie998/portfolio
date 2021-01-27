import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';

interface Content {
  key: string;
}

const useStyles = makeStyles(() => ({
  cardContainer: {
    alignItems: 'center',
    display: 'grid',
    gridAutoRows: 'auto',
    gridColumnGap: '2rem',
    gridRowGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit,10rem)',
    justifyContent: 'center',
    textAlign: 'center',
    width: '80%',
    margin: '0 auto',
  },
  cardStyle: {
    lineHeight: '1.5rem',
    borderRadius: '0.3rem',
  },
}));

const Skill: React.FC = () => {
  const classes = useStyles();
  const data: Content[] = [
    { key: 'html/css(scss)' },
    { key: 'JS/TS/React' },
    { key: 'C++' },
    { key: 'Python' },
    { key: 'Rust' },
    { key: 'Unity(C#)' },
    { key: 'bash/zsh' },
    { key: 'vim' },
    { key: 'TOEIC 870' },
    { key: '応用情報技術者' },
  ];

  const table_contents: JSX.Element[] = data.map((item) => (
    <Grid item xl key={item.key}>
      <Card className={classes.cardStyle}>
        <h5>{item.key}</h5>
      </Card>
    </Grid>
  ));

  return (
    <div id="skill" className="content-wrapper">
      <h2 className="title">Skill</h2>
      <div className={classes.cardContainer}>{table_contents}</div>
    </div>
  );
};

export default Skill;
