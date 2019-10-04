const API_KEY = "457f40520ab80a953c8f425fc21de253";

export function toGetWeatherDataFirstTime(latitude, longitude) {
  return async dispatch => {
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    data.firstCard = true;

    dispatch({ type: "FULL_DATA_WEATHER", data });
  };
}

export function toGetWeatherData(name) {
  return async dispatch => {
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`
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
