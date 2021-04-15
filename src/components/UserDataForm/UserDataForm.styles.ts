import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    width: '100%',
    marginBottom: '16px',

    '&:last-of-type': {
      marginBottom: '24px',
    },

    '@global .MuiFilledInput-underline:before , .MuiFilledInput-underline:after': {
      display: 'none',
    },

    '@global .MuiFormHelperText-root': {
      marginBottom: -14,
    },

    '& > div': {
      background: 'white',
      borderRadius: 4,
    },
  },

  link: {
    textDecoration: 'underline',
    color: 'green',
  },

  checkboxChecked: {
    color: 'green !important',
  },

  checkboxLabel: {
    fontSize: '0.9rem',
  },

  doneIcon: {
    cursor: 'initial',
    fill: 'green',
  },

  errorIcon: {
    cursor: 'initial',
    fill: 'indianred',
  },

  errorText: {
    color: '#f44336',
    margin: '0 14px',
    fontSize: '0.75rem',
  },
});

export default useStyles;
