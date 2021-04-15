export interface FormData {
  name: string;
  surname: string;
  email: string;
  cap: string;
  phone: string;
  date: string;
  privacy: boolean[];
  productType: string;
}

export enum FormStatus {
  initial = 'INITIAL',
  loading = 'LOADING',
  success = 'SUCCESS',
  fail = 'FAIL',
}
