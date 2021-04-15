import * as yup from 'yup';

const schema = yup.object().shape({
  productType: yup.string().required('You need to choose the product type'),
});

export default schema;
