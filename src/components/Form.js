import React from "react";

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
            onClick={() => console.log(this.state.inputValue)}
          >
            To get weather
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
