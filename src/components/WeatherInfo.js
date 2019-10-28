import React, { Component } from "react";
import { connect } from "react-redux";
import { toDelWidget } from "../redux/actions";
import Card from "./Card";

class WeatherInfo extends Component {
  render() {
    return (
      <div className="weather-card row d-flex">
        {!this.props.weatherData[0]
          ? null
          : this.props.weatherData.map(obj =>
              obj.cod === "404" ? null : <Card key={obj.id} obj={obj} />
            )}
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
    delWeatherWidget: id => dispatch(toDelWidget(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherInfo);
