const API_KEY = "457f40520ab80a953c8f425fc21de253";
const API_BASE = "https://api.openweathermap.org/data/2.5/";

export function getLocalWeather(latitude, longitude) {
  return async dispatch => {
    const api_url = await fetch(
      `${API_BASE}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    data.firstCard = true;

    dispatch({ type: "GET_WEATHER", data });
  };
}

export function getWeather(name) {
  return async dispatch => {
    const api_url = await fetch(
      `${API_BASE}weather?q=${name}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    if (data.cod === 200) {
      dispatch({ type: "GET_WEATHER", data });
    } else {
      dispatch({ type: "ERROR_INPUT", data });
    }
  };
}

export function deliteWidget(id) {
  return async dispatch => {
    dispatch({ type: "DEL_WIDGET", id });
  };
}

export function closeError() {
  return async dispatch => {
    dispatch({ type: "DEL_ERROR" });
  };
}
