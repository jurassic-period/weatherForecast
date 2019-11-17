import React, { useState } from "react";
import { connect } from "react-redux";
import { getCity } from "../actions/action-get-del-weather";
import InputForHeader from "../components/ input-for-header";
const paramsType = "city";

function HeaderInput({ weatherData, getCity, handleClick }) {
  const [inputValue, setInputValue] = useState("");

  const saveValue = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleCity = e => {
    e.preventDefault();
    if (inputValue.trim().length) {
      const coincedence = weatherData.find(el => {
        return el.name.toLowerCase() === inputValue.toLowerCase();
      });
      if (coincedence) {
        const coincedenceId = coincedence.id;
        handleClick(coincedenceId);
      } else {
        getCity(inputValue, paramsType);
      }
    }
    setInputValue('');
  };

  return (
    <InputForHeader
      inputValue={inputValue}
      handleCity={handleCity}
      saveValue={saveValue}
    />
  );
}

const mapStateToProps = state => {
  return {
    weatherData: state.weatherData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCity: name => dispatch(getCity(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderInput);

// Old code before I started use hooks
// class HeaderInput extends Component {
//   state = {
//     inputValue: ""
//   };

//   saveValue = event => {
//     const { value } = event.target;
//     this.setState(() => {
//       return {
//         inputValue: value
//       };
//     });
//   };

//   handleCity = e => {
//     e.preventDefault();
//     const { inputValue } = this.state;
//     if (inputValue.trim().length) {
//       const { weatherData, getCity } = this.props;
//       const coincedence = weatherData.find(el => {
//         return el.name.toLowerCase() === inputValue.toLowerCase();
//       });
//       if (coincedence) {
//         const coincedenceId = coincedence.id;
//         const { handleClick } = this.props;
//         handleClick(coincedenceId);
//       } else {
//         getCity(inputValue, paramsType);
//       }
//     }
//     this.setState(() => {
//       return {
//         inputValue: ""
//       };
//     });
//   };

//   // ________________________________________________________________

//   // Временно для отрисовки нужного количества виджетов по умолчанию

//   buildBigCityStructure = () => {
//     const { getCity } = this.props;
//     const arr = [
//       "kiev",
//       "moscow",
//       "lviv",
//       "asa",
//       "berlin",
//       "odesa",
//       "paris",
//       "palo alto",
//       "yalta",
//       "helsinki",
//       "tokio",
//       "minsk"
//     ];
//     arr.map(city => getCity(city, "city"));
//   };

//   // ________________________________________________________________

//   render() {
//     const { inputValue } = this.state;
//     // this.buildBigCityStructure(); // временно, потом удалить
//     return (
//       <InputForHeader
//         inputValue={inputValue}
//         handleCity={this.handleCity}
//         saveValue={this.saveValue}
//       />
//     );
//   }
// }
