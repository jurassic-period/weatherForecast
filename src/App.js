import React from "react";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { connect } from "react-redux";
import Error from "./components/error-modal"

function App() {

  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

export default App;
