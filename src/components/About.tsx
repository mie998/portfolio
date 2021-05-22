import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';

import polyImg from './images/polygon2.jpg';
import { useCommonStyles } from './styles/commonStyle';

const useStyles = makeStyles(() => ({
  contact: {
    fontSize: '1.5rem',
  },
  hovers: {
    color: 'white',
    '&:hover': {
      color: 'rgba(255, 255, 255, .3)',
    },
  },
  imgContainer: {
    textAlign: 'center',
  },
  profileImgPc: {
    width: '70%',
    border: '1px solid black',
    borderRadius: '5rem',
  },
  profileImgSmartPhone: {
    width: '70%',
  },
  gridContainer: {
    maxWidth: '100%',
  },
}));

interface Content {
  key: string;
  value: string;
  url: string;
}

const About: React.FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <Box className={commonClasses.contentWrapper}>
      <h2 className={commonClasses.title}>About</h2>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.gridContainer}
      >
        <Grid item xs={5} lg={3} md={3} sm={5} className={classes.imgContainer}>
          <img src={polyImg} className={classes.profileImgPc} />
        </Grid>
        <Grid item xs={8} lg={5} md={5} sm={8}>
          <p>
            京都大学情報学科現4回生。ゲームは古来からの趣味であり、嵌まり込みすぎて情報学科に入学。現在は京都大学の神田研究室にて
            Human Robot Interaction に関する研究を行なっている。
          </p>
          <p>
            ゲーム開発やWEB開発,ロボットプログラミングなどさまざまな分野に対して広く興味を持っている。
          </p>
          <p className={classes.contact}>
            連絡先: nishiwaki.kyoto[at]gmail.com
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
