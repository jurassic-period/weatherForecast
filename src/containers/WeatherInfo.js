import React, { Component } from "react";
import { connect } from "react-redux";
import { deliteWidget } from "../redux/actions";
import Card from "../components/Card";

class WeatherInfo extends Component {
  render() {
    const { weatherData, delWidget } = this.props;
    return (
      <div className="weather-card row d-flex">
        {!weatherData.length
          ? null
          : weatherData.map(obj =>
              obj.cod === "404" ? null : <Card key={obj.id} obj={obj} delWidget={delWidget} />
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
    delWidget: id => dispatch(deliteWidget(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherInfo);
