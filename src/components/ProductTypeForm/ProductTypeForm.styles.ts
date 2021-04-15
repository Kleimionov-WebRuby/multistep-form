import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  labeledRadio: {
    width: '100%',
    justifyContent: 'space-between',
    margin: 0,
    padding: 10,
    background: 'white',
    borderRadius: 10,
    border: '1px solid lightgray',
    marginBottom: 10,

    '@global .MuiRadio-colorSecondary.Mui-checked': {
      color: 'green',
    },
  },

  errorText: {
    color: '#f44336',
    margin: '0 14px 14px 14px',
  },
});

export default useStyles;
