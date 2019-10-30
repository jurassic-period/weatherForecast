import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeather } from "../redux/actions";
import Input from "../components/ Input";

class Header extends Component {
  state = {
    inputValue: ""
  };

  saveValue = value => {
    this.setState(() => {
      return {
        inputValue: value
      };
    });
  };

  newCity = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    if (inputValue.trim().length) {
      const { sendCity } = this.props;
      sendCity(inputValue);
    }
    this.setState(() => {
      return {
        inputValue: ""
      };
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Input
        inputValue={inputValue}
        newCity={this.newCity}
        saveValue={this.saveValue}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendCity: name => dispatch(getWeather(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
