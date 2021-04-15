import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  row: {
    background: 'white',
    margin: '2rem -24px -24px -24px',
    padding: 24,
    boxShadow: '0 -5px 10px 0px lightgrey',
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  button: {
    padding: '0.5rem 2rem',
    background: 'lightgreen',
    color: 'white',
    transition: '.5s linear',

    '&:hover': {
      boxShadow: '0 0 5px 1px #5d975d',
      background: 'green',
    },

    '&:disabled': {
      background: 'none',
      color: 'initial',
      border: '1px solid green',
    },
  },
});

export default useStyles;
