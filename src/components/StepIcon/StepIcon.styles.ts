import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  stepIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 15,
    height: 15,
    padding: 1,
    borderRadius: '50%',
    background: 'lightgray',
  },

  stepIconActive: {
    border: '2px solid green',
    background: 'white',
  },

  stepIconCompleted: {
    background: '#454565',
    border: '2px solid white',
  },

  doneIcon: {
    fill: 'white',
  },
});

export default useStyles;
