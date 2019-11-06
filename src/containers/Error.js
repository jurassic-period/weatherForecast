import React, { Component } from "react";
import { connect } from "react-redux";
import { closeError } from "../actions";
import ErrorMessage from "../components/error-message";

class Error extends Component {
  render() {
    const { weatherError, errorDel } = this.props;
    return <ErrorMessage weatherError={weatherError} errorDel={errorDel} />;
  }
}

const mapStateToProps = state => {
  return {
    weatherError: state.error
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
