import React from "react";
import { connect } from "react-redux";

class WeatherInfo extends React.Component {
  render() {
    console.log("propsami weather data ", this.props.weatherData);
    return (
      <div className="col-4 weather-card">
        {!this.props.weatherData[0]
          ? null
          : this.props.weatherData.map(obj => <div key={obj.id} className="weather-elem">
              <h2>Weather in {obj.name}, {obj.sys.country}</h2>
              <h3 className="temp">{obj.main.temp}°C</h3>
              <p className="weather-p">{obj.weather[0].description[0].toUpperCase() + obj.weather[0].description.slice(1)}</p>
          </div>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherData: state.weatherData
  };
};
// const mapDispatchToProps = dispatch => {
//     return {
//       pokemonsData: (offset, limit) => dispatch(loading(offset, limit))
//     };
//   };

export default connect(mapStateToProps)(WeatherInfo);
