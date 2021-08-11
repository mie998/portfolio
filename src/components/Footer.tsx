import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    backgroundColor: theme.palette.grey[900],
    marginTop: 'auto',
    bottom: '0',
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  const today = document.lastModified.split(' ')[0];

  return (
    <Box className={classes.footerWrapper}>
      <p>© Keisuke Nishiwaki</p>
      <p>last modified: {today}</p>
    </Box>
  );
};

export default Footer;
