import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import catImg from './images/catImage.jpg';
import cityImg from './images/buildingImage.jpg';

const useStyles = makeStyles((theme) =>
  createStyles({
    backView: {
      height: '100vh',
      width: '100%',
      boxSizing: 'inherit',
      background: `linear-gradient(
                -45deg, rgba(150, 150, 150, .9), rgba(0, 0, 0, .9)
            ), url(${cityImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'auto',
    },
    welcome: {
      fontSize: '4rem',
      fontFamily: 'Anton, sans-serif',
      borderBottom: 'double 1px black',
      textAlign: 'center',
      marginTop: '40vh',
      wordWrap: 'break-word',
    },
  }),
);

const Top: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.backView}>
      <h2 className={classes.welcome}>WELCOME TO MY PORTFOLIO</h2>
    </div>
  );
};

export default Top;
