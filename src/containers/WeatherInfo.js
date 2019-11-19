import React from "react";
import { connect } from "react-redux";
import { deleteCity } from "../actions";
import Card from "../components/card";

function WeatherInfo(props) {
  const { weatherData, delCity, refs } = props;
  return (
    <div className="weather-card row d-flex">
      {weatherData.length ? (
        weatherData.map(obj => (
          <Card
            key={`${obj.name}_${obj.id}`}
            obj={obj}
            delCity={delCity}
            refs={refs}
          />
        ))
      ) : (
        <div>Sorry we didn't get your current location</div>
      )}
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);

// Old code
// class WeatherInfo extends Component {
//   render() {
//     const { weatherData, delCity, refs } = this.props;
//     return (
//       <div className="weather-card row d-flex">
//         {weatherData.length &&
//           weatherData.map(obj => (
//             <Card
//               key={`${obj.name}_${obj.id}`}
//               obj={obj}
//               delCity={delCity}
//               refs={refs}
//             />
//           ))}
//       </div>
//     );
//   }
// }
