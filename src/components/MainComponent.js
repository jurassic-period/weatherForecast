import React from "react";
import Form from "./Form";
import WeatherInfo from "./WeatherInfo";
import { connect } from "react-redux";
import { toGetWeatherDataFirstTime } from "../redux/actions";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("this.props: ", this.props);
    const toRunWeatherInfo = this.props.weatherInfo;
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
        <div className="container">
          <WeatherInfo />
        </div>
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
