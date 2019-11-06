import { ERROR_INPUT, DEL_ERROR } from '../actions';

export const reducerError = (state = {}, action) => {
  switch (action.type) {
    case ERROR_INPUT:
      return action.data;
    case DEL_ERROR:
      return {};
    default:
      return state;
  }
};