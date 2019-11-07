const API_KEY = "457f40520ab80a953c8f425fc21de253";
const API_BASE = "https://api.openweathermap.org/data/2.5/";
export const FETCH_CITY_REQUEST = "FETCH_CITY_REQUEST";
export const FETCH_CITY_SUCCESS = "FETCH_CITY_SUCCESS";
export const FETCH_CITY_FAILURE = "FETCH_CITY_FAILURE";
export const DEL_CITY = "DEL_CITY";

const fetchWeather = (arg1, arg2) => {
  if(arg1 && arg2) {
    return `${API_BASE}weather?lat=${arg1}&lon=${arg2}&appid=${API_KEY}&units=metric`;
  } else {
    return `${API_BASE}weather?q=${arg1}&appid=${API_KEY}&units=metric`;
  }
};

export function getCity(latitude, longitude = false) {
  return async dispatch => {
    dispatch({ type: FETCH_CITY_REQUEST });
    const api_url = await fetch(fetchWeather(latitude, longitude));
    const data = await api_url.json();
    if (longitude) {
      data.firstCard = true;
    }
    if (data.cod === 200) {
      dispatch({ type: FETCH_CITY_SUCCESS, data });
    } else {
      dispatch({ type: FETCH_CITY_FAILURE, data });
    }
  };
}

export function deleteCity(id) {
  return async dispatch => {
    dispatch({ type: DEL_CITY, id });
  };
}

// Old way to do it 

// export function getLocalWeather(latitude, longitude) {
//   return async dispatch => {
//     const api_url = await fetch(
//       `${API_BASE}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
//     );
//     const data = await api_url.json();
//     data.firstCard = true;

//     dispatch({ type: GET_WEATHER, data });
//   };
// }

// export function getWeather(name) {
//   return async dispatch => {
//     const api_url = await fetch(
//       `${API_BASE}weather?q=${name}&appid=${API_KEY}&units=metric`
//     );
//     const data = await api_url.json();
//     if (data.cod === 200) {
//       dispatch({ type: GET_WEATHER, data });
//     } else {
//       dispatch({ type: ERROR_INPUT, data });
//     }
//   };
// }
