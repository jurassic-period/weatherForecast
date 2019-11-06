import React, { Component } from "react";
import { connect } from "react-redux";
import { deliteCity } from "../actions";
import Card from "../components/card";

class WeatherInfo extends Component {
  render() {
    const { weatherData, delCity } = this.props;
    return (
      <div className="weather-card row d-flex">
        {weatherData.length &&
          weatherData.map(obj => (
            <Card
              key={`${obj.name}_${obj.id}`}
              obj={obj}
              delCity={delCity}
            />
          ))}
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
    delCity: id => dispatch(deliteCity(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherInfo);
