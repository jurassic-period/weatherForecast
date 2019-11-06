export const DEL_ERROR = "DEL_ERROR";

export function closeError() {
    return async dispatch => {
      dispatch({ type: DEL_ERROR });
    };
};