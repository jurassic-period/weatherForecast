export const reducer = (state = [], action) => {
    switch (action.type) {
      case "FULL_DATA_WEATHER":
        if(action.data.cod === '404' && state[state.length - 1].cod === '404' ) {
          return state;
        } else {
          return [...state, action.data]; 
        }
      case "DEL_WIDGET":
          const stateWithoutDelWidget = state.filter(obj => obj.id !== action.id);
          return stateWithoutDelWidget;
      case "DEL_ERROR":
          const stateWithoutError = state.filter(obj => obj.cod !== '404');
          return stateWithoutError;
      default:
        return state;
    }
  };

 