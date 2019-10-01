import React from "react";
import Form from "./Form";
import WeatherInfo from "./WeatherInfo";
import { connect } from "react-redux";
import { toGetWeatherData, toGetWeatherDataFirstTime } from "../redux/actions";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0
    };
  }

  componentDidMount() {
    console.log("props: ", this.props);
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition(function(position) {
      const {
        coords: { latitude, longitude }
      } = position;
      lat = latitude;
      lon = longitude;
    });
    console.log('coords after getCurrentPosition', lat, lon)

    // console.log('currentCoords',currentCoords);
    this.props.weatherInfo(55.7558, 37.6173);

  }

  render() {
    return (
      <div>
        <h1>Weather Forecast for your city</h1>
        <Form />
        <WeatherInfo />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    weatherInfo: (lat, lon) => dispatch(toGetWeatherDataFirstTime(lat, lon))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MainComponent);
