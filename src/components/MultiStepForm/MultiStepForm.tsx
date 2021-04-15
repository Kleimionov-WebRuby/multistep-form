import { FC } from 'react';
import { Step, StepConnector, StepLabel, Stepper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import StepIcon from 'components/StepIcon/StepIcon';
import ProductTypeForm from 'components/ProductTypeForm/ProductTypeForm';
import UserDataForm from 'components/UserDataForm/UserDataForm';
import FinalScreen from 'components/FinalScreen/FinalScreen';
import { RootState } from 'store';
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { useStyles, ConnectorStyles } from './MultiStepForm.styles';

const screens = [
  {
    title: 'Scegli le coperute',
    Form: ProductTypeForm,
  },
  {
    title: 'I tuoi dati',
    Form: UserDataForm,
  },
  {
    title: 'Richiedi stato',
    Form: FinalScreen,
  },
] as const;

const Connector = ConnectorStyles(StepConnector);

const MultiStepForm: FC = () => {
  const classes = useStyles();
  const page = useSelector((state: RootState) => state.multiStepReducer.page);
  const { title, Form } = screens[page];

  return (
    <div className={classes.MultiStepForm}>
      <header className={classes.header}>
        <LogoIcon className={classes.logoIcon} />
      </header>
      <main className={classes.main}>
        <Stepper className={classes.stepper} connector={<Connector />}>
          {screens.map(({ title: key }, index) => (
            <Step key={key} completed={index < page} active={page === index}>
              <StepLabel StepIconComponent={StepIcon} />
            </Step>
          ))}
        </Stepper>
        <h2 className={classes.title}>{title}</h2>
        <Form />
      </main>
    </div>
  );
};

export default MultiStepForm;
