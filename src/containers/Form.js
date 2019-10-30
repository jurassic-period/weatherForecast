import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeather } from "../redux/actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  toAddNewWidgetOnClick(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    if (inputValue.trim().length) {
      this.props.sendCity(inputValue);
    }
    this.setState({
      inputValue: ""
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={e => this.toAddNewWidgetOnClick(e)}>
        <div className="d-flex flex-column col form-wrapper">
          <input
            className="input-city"
            type="text"
            value={inputValue}
            placeholder="Your city name"
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
          <button className="button-city">To get weather</button>
        </div>
      </form>
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
)(Form);
