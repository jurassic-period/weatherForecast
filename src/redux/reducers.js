export const reducer = (state = [], action) => {
    switch (action.type) {
      case "FULL_DATA_WEATHER":
        return [...state, action.data]; 
      case "DEL_WIDGET":
          for (let i = 0; i < state.length; i++){
            if (state[i].id === action.id) {
               state.splice(i, 1);
               return state;
            }
          }
      default:
        return state;
    }
  };

 