import * as yup from 'yup';

const capRegEx = /^[0-9]{5}$/;
const dateRegEx = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;
const phoneRegEx = /^\+?[0-9]{2,4}?(([0-9\s]{8})|([0-9\s]{10}))$/;

const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Minimal length is 3'),
  surname: yup
    .string()
    .required('Surname is required')
    .min(3, 'Minimal length is 3'),
  email: yup
    .string()
    .required('Email is required')
    .email('Use correct email format'),
  cap: yup
    .string()
    .required('Cap is required')
    .matches(capRegEx, "Cap doesn't match the pattern"),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(phoneRegEx, 'Enter a valid phone nubmer'),
  date: yup.string().required('Date is required').matches(dateRegEx),
  privacy: yup
    .array()
    .test('Checkbox test', 'At least one option must be choosen', (arr) =>
      (arr as boolean[]).some((value) => value)
    ),
});

export default schema;
