/* eslint-disable import/no-extraneous-dependencies */
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import multiStepReducer from './components/MultiStepForm/store/MultiStepForm.reducer';

export const rootReducer = combineReducers({ multiStepReducer });
export type RootState = ReturnType<typeof rootReducer>;
export type DispatchThunk = ThunkDispatch<RootState, void, AnyAction>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
