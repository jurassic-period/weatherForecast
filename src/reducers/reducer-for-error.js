import { FETCH_CITY_FAILURE, DEL_CITY_ERROR } from '../actions';

export const reducerError = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CITY_FAILURE:
      return action.data;
    case DEL_CITY_ERROR:
      return {};
    default:
      return state;
  }
};