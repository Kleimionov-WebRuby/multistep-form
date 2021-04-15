import { FC } from 'react';
import clsx from 'clsx';
import { ReactComponent as DoneIcon } from 'assets/icons/done.svg';
import useStyles from './StepIcon.styles';

const StepIcon: FC<{
  completed: boolean;
  active: boolean;
}> = ({ completed, active }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.stepIcon,
        active && classes.stepIconActive,
        completed && classes.stepIconCompleted
      )}
    >
      {completed && <DoneIcon className={classes.doneIcon} />}
    </div>
  );
};

export default StepIcon;
