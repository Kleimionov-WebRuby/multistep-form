import { FC } from 'react';
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Link,
  TextField,
} from '@material-ui/core';
import { RootState } from 'store';
import schema from 'validation/UserDataScheme';
import { DatePicker } from '@material-ui/pickers';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as DoneIcon } from 'assets/icons/done.svg';
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
import FormNavigation from 'components/FormNavigation/FormNavigation';
import { setNextPhase } from 'components/MultiStepForm/store/MultiStepForm.actions';
import useStyles from './UserDataForm.styles';

interface UserDataFormFields {
  name: string;
  surname: string;
  email: string;
  cap: string;
  phone: string;
  date: string;
  privacy: boolean[];
}

const UserDataForm: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { formData } = useSelector(
    (state: RootState) => state.multiStepReducer
  );
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: formData, resolver: yupResolver(schema) });
  const errorsAmount = Object.keys(errors).length;

  const onSubmit = (data: UserDataFormFields) => dispatch(setNextPhase(data));

  const getEndAdoretment = (field: string) =>
    !!errorsAmount && (
      <InputAdornment title={errors[field]?.message} position="end">
        {errors[field] ? (
          <ErrorIcon className={classes.errorIcon} />
        ) : (
          <DoneIcon className={classes.doneIcon} />
        )}
      </InputAdornment>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        Sei gia a cliente?{' '}
        <Link
          className={classes.link}
          target="_blank"
          href="https://www.lokky.it/login"
          rel="noreferrer"
        >
          Acedi
        </Link>
      </p>
      <Controller
        name="name"
        control={control}
        defaultValue={formData.name}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            className={classes.input}
            label="Nome"
            variant="filled"
            error={!!errors.name}
            helperText={errors.name?.message}
            InputProps={{
              endAdornment: getEndAdoretment('name'),
            }}
          />
        )}
      />
      <Controller
        name="surname"
        control={control}
        defaultValue={formData.surname}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            className={classes.input}
            label="Cognome"
            variant="filled"
            error={!!errors.surname}
            helperText={errors.surname?.message}
            InputProps={{
              endAdornment: getEndAdoretment('surname'),
            }}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue={formData.email}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            className={classes.input}
            label="Email"
            variant="filled"
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              endAdornment: getEndAdoretment('email'),
            }}
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        defaultValue={formData.phone}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            className={classes.input}
            label="Cellulare"
            variant="filled"
            error={!!errors.phone}
            helperText={errors.phone?.message}
            InputProps={{
              endAdornment: getEndAdoretment('phone'),
            }}
          />
        )}
      />
      <Controller
        name="cap"
        control={control}
        defaultValue={formData.cap}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            className={classes.input}
            label="Cap"
            variant="filled"
            error={!!errors.cap}
            helperText={errors.cap?.message}
            InputProps={{
              endAdornment: getEndAdoretment('cap'),
            }}
          />
        )}
      />
      <Controller
        name="date"
        control={control}
        defaultValue={formData.date}
        render={({ field }) => (
          <DatePicker
            value={
              field.value
                ? new Date(field.value.split('.').reverse().join('-'))
                : null
            }
            format="dd/MM/yyyy"
            disablePast
            onChange={(date) => field.onChange(date?.toLocaleDateString())}
            className={classes.input}
            inputVariant="filled"
            label="Data di decorrenza policia"
            error={!!errors.date}
            helperText={errors.date?.message}
            InputProps={{
              endAdornment: getEndAdoretment('date'),
            }}
          />
        )}
      />
      <div>
        <Controller
          name="privacy[0]"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              onChange={field.onChange}
              checked={field.value ?? !!formData.privacy[0]}
              classes={{ label: classes.checkboxLabel }}
              label={
                <p>
                  Dechiaro di aver preso visione dell in{' '}
                  <Link
                    className={classes.link}
                    target="_blank"
                    href="https://www.lokky.it/login"
                    rel="noreferrer"
                  >
                    informativa privacy
                  </Link>{' '}
                  e prestare il consenso al tattamento dei dati
                </p>
              }
              control={
                <Checkbox
                  classes={{
                    colorSecondary: classes.checkboxChecked,
                    checked: classes.checkboxChecked,
                  }}
                />
              }
            />
          )}
        />
        <Controller
          name="privacy[1]"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              onChange={field.onChange}
              checked={field.value ?? !!formData.privacy[1]}
              classes={{ label: classes.checkboxLabel }}
              label={
                <p>
                  Dechiaro di aver preso visione dell in{' '}
                  <Link
                    className={classes.link}
                    target="_blank"
                    href="https://www.lokky.it/login"
                    rel="noreferrer"
                  >
                    informativa privacy
                  </Link>{' '}
                  e prestare il consenso al tattamento dei dati
                </p>
              }
              control={
                <Checkbox
                  classes={{
                    colorSecondary: classes.checkboxChecked,
                    checked: classes.checkboxChecked,
                  }}
                />
              }
            />
          )}
        />
        <div className={classes.errorText}>{errors.privacy?.message}</div>
      </div>
      <FormNavigation />
    </form>
  );
};

export default UserDataForm;
