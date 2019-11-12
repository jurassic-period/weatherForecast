import React from "react";

export default function InputForHeader({ inputValue, addText, saveValue }) {
  return (
    <form onSubmit={e => addText(e)}>
      <div className="d-flex flex-column col form-wrapper">
        <input
          className="input-city"
          type="text"
          value={inputValue}
          placeholder="Your city name"
          onChange={saveValue}
        />
        <button className="button-city">To get weather</button>
      </div>
    </form>
  );
}
