import React, { Component } from "react";
import Form from "./Header";
import WeatherInfo from "./WeatherInfo";
import { connect } from "react-redux";
import { getLocalWeather } from "../redux/actions";
import Error from "./Error";

class MainComponent extends Component {
  componentDidMount() {
    const toGetFirstData = this.props.weatherInfo;
    //To get user coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      const {
        coords: { latitude, longitude }
      } = position;
      toGetFirstData(latitude, longitude);
    });
  }

  render() {
    return (
      <div>
        <h1>Weather Forecast</h1>
        <Form />
        <Error />
        <div className="container">
          <WeatherInfo />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    weatherInfo: (lat, lon) => dispatch(getLocalWeather(lat, lon))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MainComponent);
