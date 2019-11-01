import React, { Component } from "react";
import HeaderInput from "./HeaderInput";
import WeatherInfo from "./WeatherInfo";
import { connect } from "react-redux";
import { getLocalWeather } from "../redux/actions";
import Error from "./Error";

class MainComponent extends Component {
  componentDidMount() {
    const { weatherInfo } = this.props;
    //To get user coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      const {
        coords: { latitude, longitude }
      } = position;
      weatherInfo(latitude, longitude);
    });
  }

  render() {
    return (
      <div>
        <h1>Best Weather Forecast</h1>
        <HeaderInput />
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
