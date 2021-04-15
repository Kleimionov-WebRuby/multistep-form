import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  MultiStepForm: {
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(250, 250, 250)',
    maxHeight: '80vh',
    width: 400,
    border: '1px solid lightsteelblue',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: 'lightgray lightgreen',

    '&::-webkit-scrollbar': {
      width: 5,
      marginRight: 5,
    },

    '&::-webkit-scrollbar-track': {
      background: ' lightgray',
    },

    '&::-webkit-scrollbar-thumb': {
      background: 'lightgreen',
      borderRadius: 5,
    },

    '&::-webkit-scrollbar-button': {
      height: 0,
    },
  },

  header: {
    padding: 24,
    background: 'white',
    boxShadow: '0 5px 10px 0px lightgrey',
  },

  main: {
    flex: 1,
    padding: 24,
  },

  logoIcon: {
    display: 'block',
    width: '40%',
    margin: 'auto',
  },

  title: {
    textAlign: 'center',
  },

  stepper: {
    padding: '0 20px',
    background: 'none',

    '@global .MuiStep-horizontal, .MuiStepLabel-iconContainer': {
      padding: 0,
    },
  },
});

export const ConnectorStyles = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },

  active: {
    '& $line': {
      borderColor: '#454565',
    },
  },

  completed: {
    '& $line': {
      borderColor: '#454565',
    },
  },

  line: {
    borderColor: 'lightgray',
    borderTopWidth: 3,
    borderRadius: 1,
  },
});
