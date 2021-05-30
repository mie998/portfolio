import { createMuiTheme } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: blue,
    text: {
      primary: grey[900],
      secondary: grey[100],
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 300, // for smartphone
      sm: 768, // for tablet
      md: 992, // for PC
      lg: 1400,
      xl: 1800,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        // don't change text to uppercase in button component
        textTransform: 'none',
      },
    },
    MuiLink: {
      root: {
        // don't describe underline on link component
        underline: 'none',
      },
    },
  },
});
