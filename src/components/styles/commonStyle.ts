import { makeStyles } from '@material-ui/core/styles';

export const useCommonStyles = makeStyles((theme) => ({
  container: {
    boxSizing: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.grey[800],
    minHeight: '100vh',
  },
  contentWrapper: {
    fontSize: '1.2rem',
    boxSizing: 'inherit',
    wordWrap: 'break-word',
    padding: '5rem 0',
    color: theme.palette.grey[100],
  },
  title: {
    fontSize: '4rem',
    fontFamily: 'Anton, sans-serif',
    textAlign: 'center',
    padding: '1rem 0',
  },
}));
