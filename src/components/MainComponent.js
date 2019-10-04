import React from "react";
import Form from "./Form";
import WeatherInfo from "./WeatherInfo";
import { connect } from "react-redux";
import { toGetWeatherDataFirstTime } from "../redux/actions";
import Error from './error-modal';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const toRunWeatherInfo = this.props.weatherInfo;
    const propsState = this.props.weatherData;
    navigator.geolocation.getCurrentPosition(function(position) {
      const {
        coords: { latitude, longitude }
      } = position;

    toRunWeatherInfo(latitude, longitude);
    });
  }

  render() {

    return (
      <div className="">
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
