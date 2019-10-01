import React from "react";
import Form from "./Form";
import WeatherInfo from "./WeatherInfo";

const API_KEY = "457f40520ab80a953c8f425fc21de253";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0
    };
  }

  async toDownloadData() {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);
  }

  render() {
      this.toDownloadData();
    return (
      <div>
        <h1>Weather Forecast for your city</h1>
        <Form />
        <WeatherInfo />
      </div>
    );
  }
}

export default MainComponent;
