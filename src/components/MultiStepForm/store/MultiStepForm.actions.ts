import { DispatchThunk } from 'store';
import postFormData from 'api/postFormData';
import { FormData, FormStatus } from '../MultiStepForm.types';
import * as types from './MultiStepForm.actionTypes';

export const goNextPage = {
  type: types.GO_NEXT_PAGE,
};

export const goPrevPage = {
  type: types.GO_PREV_PAGE,
};

export const setFormData = (data: Partial<FormData>) => ({
  type: types.SET_FORM_DATA,
  payload: data,
});

export const setFormStatus = (status: FormStatus) => ({
  type: types.SET_FORM_STATUS,
  payload: status,
});

export const setNextPhase = (data: Partial<FormData>) => (
  dispatch: DispatchThunk
) => {
  dispatch(setFormData(data));
  dispatch(goNextPage);
};

export const sendFormData = (data: FormData) => async (
  dispatch: DispatchThunk
) => {
  dispatch(setFormStatus(FormStatus.loading));

  try {
    const response = await postFormData(data);
    dispatch(setFormStatus(response.ok ? FormStatus.success : FormStatus.fail));
  } catch (e) {
    dispatch(setFormStatus(FormStatus.fail));
  }
};
