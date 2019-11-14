import React, { Component, createRef } from "react";
import HeaderInput from "./HeaderInput";
import WeatherInfo from "./WeatherInfo";
import { connect } from "react-redux";
import { getCity } from "../actions";
import Error from "./Error";
const coords = "coords";

class MainComponent extends Component {
  state = {
    refs: this.props.weatherData.reduce((acc, value) => {
      acc[value.id] = createRef();
      return acc;
    }, {})
  };

  handleClick = id => {
    const { refs } = this.state;
    const element = refs[id].current;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    element.classList.add('red');
    setTimeout(() => element.classList.remove('red'), 1800);
  };

  componentDidMount() {
    const { weatherInfo } = this.props;
    //To get user coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      const {
        coords: { latitude, longitude }
      } = position;
      weatherInfo({ latitude, longitude }, coords);
    });
  }

  render() {
    const { refs } = this.state;
    return (
      <div>
        <h1>Best Weather Forecast</h1>
        <HeaderInput handleClick={this.handleClick} />
        <Error />
        <div className="container">
          <WeatherInfo refs={refs} />
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
    weatherInfo: (lat, lon) => dispatch(getCity(lat, lon))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
