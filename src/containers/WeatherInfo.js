import React, { Component, createRef, forwardRef } from "react";
import { connect } from "react-redux";
import { deleteCity } from "../actions";
import Card from "../components/card";

class WeatherInfo extends Component {
  // constructor(props) {
  //   super(props)
  //   this.ref = createRef();
  // }
  state = {
    refs: LIST.reduce((acc, value) => {
      acc[value.id] = React.createRef();
      return acc;
    }, {})
  };

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
              ref={this.ref}
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
    delCity: id => dispatch(deleteCity(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherInfo);
