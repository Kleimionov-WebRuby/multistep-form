import { withStyles } from '@material-ui/core';

const globalStyles = withStyles({
  '@global': {
    '*, ::before, ::after': {
      boxSizing: 'border-box',
    },

    body: {
      fontFamily: 'Poppins',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

export default globalStyles;
