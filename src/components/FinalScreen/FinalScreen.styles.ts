import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loadingIcon: {
    height: 150,
    width: 150,
    animation: '$rotate 2s linear infinite',
  },

  status: {
    textAlign: 'center',
  },

  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  successIcon: {
    height: 150,
    width: 150,
    fill: 'green',
  },

  '@keyframes rotate': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
});

export default useStyles;
