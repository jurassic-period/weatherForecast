import React, { Component } from "react";
import { connect } from "react-redux";
import { getCity } from "../actions/action-get-del-weather";
import InputForHeader from "../components/ input-for-header";
const paramsType = 'city';

class HeaderInput extends Component {
  state = {
    inputValue: ""
  };

  saveValue = event => {
    const { value } = event.target;
    this.setState(() => {
      return {
        inputValue: value
      };
    });
  };

  addText = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    if (inputValue.trim().length) {
      const { getCity } = this.props;
      getCity(inputValue, paramsType);
    }
    this.setState(() => {
      return {
        inputValue: ""
      };
    });
  };

  // ________________________________________________________________

  // Временно для отрисовки нужно количества виджетов по умолчанию

buildBigCityStructure = () => {
  const { getCity } = this.props;
  const arr = ['kiev', 'moscow', 'lviv', 'asa', 'berlin', 'odesa', 'paris', 'palo alto', 'yalta', 'helsinki', 'tokio', 'minsk'];
  arr.map(city => getCity(city, 'city'));
};

// ________________________________________________________________

  render() {
    const { inputValue } = this.state;
    // this.buildBigCityStructure(); // временно потом удалить
    return (
      <InputForHeader
        inputValue={inputValue}
        addText={this.addText}
        saveValue={this.saveValue}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCity: name => dispatch(getCity(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HeaderInput);
