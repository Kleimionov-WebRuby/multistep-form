import { Button } from '@material-ui/core';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { goPrevPage } from 'components/MultiStepForm/store/MultiStepForm.actions';
import useStyles from './FormNavigation.styles';

const FormNavigation: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const page = useSelector((state: RootState) => state.multiStepReducer.page);
  const goPrevious = () => dispatch(goPrevPage);

  return (
    <nav className={classes.row}>
      <Button
        className={classes.button}
        onClick={goPrevious}
        disabled={page === 0}
      >
        Indietro
      </Button>
      <Button className={classes.button} type="submit">
        Avanti
      </Button>
    </nav>
  );
};

export default FormNavigation;
