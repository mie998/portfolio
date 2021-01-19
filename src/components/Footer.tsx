import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    marginTop: 'auto',
    bottom: '0',
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerWrapper}>
      <p>Produced by Keisuke Nishiwaki</p>
      <p>last modified: 2021/1/14</p>
    </div>
  );
};

export default Footer;
