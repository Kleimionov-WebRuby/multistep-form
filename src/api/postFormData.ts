import { FormData } from '../components/MultiStepForm/MultiStepForm.types';

/* eslint-disable no-console */

const fetchMock: typeof fetch = async (url, options?) => {
  console.log(url, options?.body);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return new Response(null, { status: 200, statusText: 'data received' });
};

const postFormData = async (data: FormData) => {
  const response = await fetchMock('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response;
};

export default postFormData;
