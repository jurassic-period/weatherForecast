export const reducer = (state = [], action) => {
    switch (action.type) {
      case "FULL_DATA_WEATHER":
        return [...state, action.data]; 
      case "DEL_WIDGET":
          const stateWithoutDelWidget = state.filter(obj => obj.id !== action.id);
          return stateWithoutDelWidget;
      case "CITY_ERROR":
        return state;
      default:
        return state;
    }
  };

 