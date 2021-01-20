import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';
import './styles/Skill.scss';

interface Content {
  key: string;
}

const useStyles = makeStyles(() => ({
  cardContainer: {
    textAlign: 'center',
    width: '60%',
    margin: '0 auto',
  },
  cardStyle: {
    width: '10rem',
    height: '5rem',
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
    // <tr key={item.key}>
    //     <th>{item.key}</th>
    // </tr>
    <Grid item xl key={item.key}>
      <Card className={classes.cardStyle}>
        <h5>{item.key}</h5>
      </Card>
    </Grid>
  ));

  return (
    <div id="skill" className="content-wrapper">
      <h2 className="title">Skill</h2>
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

export default Skill;
