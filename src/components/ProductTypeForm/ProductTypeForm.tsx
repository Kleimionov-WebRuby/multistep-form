import { FC } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import schema from 'validation/ProductTypeScheme';
import FormNavigation from 'components/FormNavigation/FormNavigation';
import { setNextPhase } from 'components/MultiStepForm/store/MultiStepForm.actions';
import { RootState } from 'store';
import useStyles from './ProductTypeForm.styles';

interface ProductTypeFormData {
  productType: string;
}

const productTypes = [
  'RC Professionale',
  'RC Terzi',
  'RC Asseverazione',
  'RC Certificazione Energetica',
  'Cyber',
] as const;

const ProductTypeForm: FC = () => {
  const classes = useStyles();
  const { formData } = useSelector(
    (state: RootState) => state.multiStepReducer
  );
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: formData, resolver: yupResolver(schema) });

  const onSubmit = (data: ProductTypeFormData) => dispatch(setNextPhase(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="productType"
        control={control}
        render={({ field }) => (
          <RadioGroup onChange={field.onChange}>
            {productTypes.map((productType) => (
              <FormControlLabel
                key={productType}
                onChange={field.onChange}
                checked={
                  field.value
                    ? field.value === productType
                    : formData.productType === productType
                }
                value={productType}
                label={productType}
                control={<Radio />}
                className={classes.labeledRadio}
                labelPlacement="start"
              />
            ))}
          </RadioGroup>
        )}
      />
      <div className={classes.errorText}>{errors.productType?.message}</div>
      <FormNavigation />
    </form>
  );
};

export default ProductTypeForm;
