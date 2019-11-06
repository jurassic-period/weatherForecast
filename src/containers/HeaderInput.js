import React, { Component } from "react";
import { connect } from "react-redux";
import { getCity } from "../actions/action-get-del-weather";
import InputForHeader from "../components/ input-for-header";

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
    sendCity: name => dispatch(getCity(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HeaderInput);
