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
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={e => this.setState({ inputValue: e.target.value })}
        />
        <button
          type="button"
          onClick={() => console.log(this.state.inputValue)}
        >
          To get weather
        </button>
      </form>
    );
  }
}

export default Form;
