import React from "react";
import { connect } from "react-redux";
import { toGetWeatherData } from "../redux/actions";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  render() {
    return (
      <form>
        <div className="d-flex flex-column col-3 mx-auto">
          <input
            className="input-city"
            type="text"
            placeholder="Your city name"
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
          <button
            className="button-city"
            type="button"
            onClick={() => this.state.inputValue.trim().length > 0? this.props.sendCity(this.state.inputValue) : null}
          >
            To get weather
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendCity: (name) => dispatch(toGetWeatherData(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);

