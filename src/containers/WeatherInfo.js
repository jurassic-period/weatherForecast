import React, { Component, createRef, forwardRef } from "react";
import { connect } from "react-redux";
import { deleteCity } from "../actions";
import Card from "../components/card";

class WeatherInfo extends Component {
  state = {
    refs: this.props.weatherData.reduce((acc, value) => {
      acc[value.id] = React.createRef();
      return acc;
    }, {})
  };

  handleClick = (id) => {
  	this.state.refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  render() {
    const { weatherData, delCity, focus } = this.props;
    const { refs } = this.state;
    console.log('refs :', refs)
    if(focus){ this.handleClick};
    return (
      <div className="weather-card row d-flex">
        {weatherData.length &&
          weatherData.map(obj => (
            <Card
              key={`${obj.name}_${obj.id}`}
              obj={obj}
              delCity={delCity}
              refs={refs}
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
