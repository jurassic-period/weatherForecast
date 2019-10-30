import React, { Component } from "react";
import { connect } from "react-redux";
import { closeError } from "../redux/actions";
import ErrorMessage from '../components/Error-message';

class Error extends Component {

  render() {
    const { weatherData, errorDel } = this.props;
    return (
      <ErrorMessage weatherData={weatherData} errorDel={errorDel}/>
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
    errorDel: () => dispatch(closeError())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Error);
