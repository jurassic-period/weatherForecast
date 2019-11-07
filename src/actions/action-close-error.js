export const DEL_CITY_ERROR = "DEL_CITY_ERROR";

export function closeError() {
    return async dispatch => {
      dispatch({ type: DEL_CITY_ERROR });
    };
};