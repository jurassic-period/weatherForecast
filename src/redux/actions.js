const API_KEY = "457f40520ab80a953c8f425fc21de253";
const API_URL = "https://api.openweathermap.org/data/2.5/";

export function getLocalWeather(latitude, longitude) {
  return async dispatch => {
    const api_url = await fetch(
      `${API_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    data.firstCard = true;

    dispatch({ type: "FULL_DATA_WEATHER", data });
  };
}

export function toGetWeatherData(name) {
  return async dispatch => {
    const api_url = await fetch(
      `${API_URL}weather?q=${name}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    dispatch({ type: "FULL_DATA_WEATHER", data });
  };
}

export function toDelWidget(id) {
  return async dispatch => {
    dispatch({ type: "DEL_WIDGET", id });
  };
}

export function toDelError(id) {
  return async dispatch => {
    dispatch({ type: "DEL_ERROR" });
  };
}
