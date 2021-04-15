import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { ReactComponent as IconLoading } from 'assets/icons/loading.svg';
import { ReactComponent as DoneIcon } from 'assets/icons/done.svg';
import { sendFormData } from 'components/MultiStepForm/store/MultiStepForm.actions';
import { FormStatus } from 'components/MultiStepForm/MultiStepForm.types';
import useStyles from './FinalScreen.styles';

const FinalScreen: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { formStatus, formData } = useSelector(
    (state: RootState) => state.multiStepReducer
  );

  useEffect(() => {
    dispatch(sendFormData(formData));
  }, []);

  switch (formStatus) {
    case FormStatus.loading:
      return (
        <div className={classes.status}>
          <h4>Sending your information...</h4>
          <div className={classes.container}>
            <IconLoading className={classes.loadingIcon} />
          </div>
        </div>
      );
    case FormStatus.fail:
      return (
        <div className={classes.status}>
          <h4>
            Looks like we have some server issues. Please, try again later
          </h4>
          <div className={classes.container}>
            <IconLoading className={classes.loadingIcon} />
          </div>
        </div>
      );
    case FormStatus.success:
      return (
        <div className={classes.status}>
          <h4>Your data has been successfully sent</h4>
          <div className={classes.container}>
            <DoneIcon className={classes.successIcon} />
          </div>
        </div>
      );
    case FormStatus.initial:
    default:
      return (
        <div className={classes.status}>
          <h4>Your request will be sent soon</h4>
          <p>
            Waiting for the request. If it takes to long time please reload the
            page.
          </p>
        </div>
      );
  }
};

export default FinalScreen;
