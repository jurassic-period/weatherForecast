export const reducer = (state = [], action) => {
    switch (action.type) {
      case "FULL_DATA_WEATHER":
        return [...state, action.data]; 
      default:
        return state;
    }
  };