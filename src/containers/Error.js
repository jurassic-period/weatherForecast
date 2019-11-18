import React from "react";
import { connect } from "react-redux";
import { closeError } from "../actions";
import ErrorMessage from "../components/error-message";

function Error({ weatherError, errorDel }) {
  return <ErrorMessage weatherError={weatherError} errorDel={errorDel} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Error);
