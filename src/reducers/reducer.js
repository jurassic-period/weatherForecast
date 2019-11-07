import { FETCH_CITY_SUCCESS, DEL_CITY } from '../actions';

export const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITY_SUCCESS:
      if (action.data.firstCard) {
        const stateWithoutPreviousLocalPosition = state.filter(
          obj => !obj.firstCard
        );
        return [action.data, ...stateWithoutPreviousLocalPosition];
      } else if (state.some(obj => obj.name === action.data.name)) {
        return state;
      }
      return [...state, action.data];
    case DEL_CITY:
      const stateWithoutDelWidget = state.filter(obj => obj.id !== action.id);
      return stateWithoutDelWidget;
    default:
      return state;
  }
};
