export const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_WEATHER":
      if (action.data.firstCard) {
        const stateWithoutPreviousLocalPosition = state.filter(
          obj => !obj.firstCard
        );
        return [action.data, ...stateWithoutPreviousLocalPosition];
      } else if (state.some(obj => obj.name === action.data.name)) {
        return state;
      }
      return [...state, action.data];
    case "DEL_WIDGET":
      const stateWithoutDelWidget = state.filter(obj => obj.id !== action.id);
      return stateWithoutDelWidget;
    default:
      return state;
  }
};

export const reducerError = (state = {}, action) => {
  switch (action.type) {
    case "ERROR_INPUT":
      return action.data
    case "DEL_ERROR":
      return {};
    default:
      return state;
  }
};
