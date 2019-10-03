import React from "react";

class Error extends React.Component {
  render() {
    return (
      <div className=" modal-wrapper">
        <h2>Вы ввели неверное название города, повторите ввод</h2>
        <button className="btn-cancel" onClick={null}>
          CLOSE
        </button>
      </div>
    );
  }
}

export default Error;
