import React, { Component } from "react";
import Form from "./Form";
import WeatherInfo from "./WeatherInfo";
import { connect } from "react-redux";
import { toGetWeatherDataFirstTime } from "../redux/actions";
import Error from "./error-message";

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

const mapStateToProps = state => {
  return {
    weatherData: state.weatherData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    weatherInfo: (lat, lon) => dispatch(toGetWeatherDataFirstTime(lat, lon))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
