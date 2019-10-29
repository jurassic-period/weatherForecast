export const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_WEATHER":
      if (state.some(obj => obj.name === action.data.name)) {
        return state;
      }
      return [...state, action.data];
    case "DEL_WIDGET":
      const stateWithoutDelWidget = state.filter(obj => obj.id !== action.id);
      return stateWithoutDelWidget;
    case "DEL_ERROR":
      const stateWithoutError = state.filter(obj => obj.cod !== "404");
      return stateWithoutError;
    default:
      return state;
  }
};
