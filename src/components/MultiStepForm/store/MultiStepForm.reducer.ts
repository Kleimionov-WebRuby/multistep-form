import { AnyAction } from 'redux';
import { FormStatus } from '../MultiStepForm.types';
import {
  GO_NEXT_PAGE,
  GO_PREV_PAGE,
  SET_FORM_DATA,
  SET_FORM_STATUS,
} from './MultiStepForm.actionTypes';

const initialState = {
  page: 0,
  formStatus: FormStatus.initial,
  formData: {
    name: '',
    surname: '',
    email: '',
    cap: '',
    phone: '',
    date: '',
    privacy: [],
    productType: '',
  },
};

function MultiStepReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_FORM_DATA: {
      const formData = { ...state.formData, ...action.payload };
      return { ...state, formData };
    }
    case SET_FORM_STATUS:
      return { ...state, formStatus: action.payload };
    case GO_NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case GO_PREV_PAGE:
      return { ...state, page: state.page - 1 };
    default:
      return state;
  }
}

export default MultiStepReducer;
