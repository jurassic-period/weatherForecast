import React, { Component } from "react";
import { connect } from "react-redux";
import { delWidget } from "../redux/actions";
import Card from "./Card";

class WeatherInfo extends Component {
  render() {
    const { weatherData, deliteWidget } = this.props;
    console.log(this.props);
    const deliteWidget2 = (id) => deliteWidget(id);
    return (
      <div className="weather-card row d-flex">
        {!weatherData[0]
          ? null
          : weatherData.map(obj =>
              obj.cod === "404" ? null : <Card key={obj.id} obj={obj} deliteWidget={deliteWidget2} />
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
    deliteWidget: id => dispatch(delWidget(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherInfo);
