import React from "react";
import { connect } from "react-redux";
import { toDelError } from "../redux/actions";

class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("fucjk", this.props);
    return (
      <div>
        {!this.props.weatherData[0]
          ? null
          : this.props.weatherData.map(obj =>
              obj.cod === "404" ? (
                <div className="modal-info">
                  <h2>
                    Unfortunately this city is not on our list, or you made a
                    mistake while entering, try again
                  </h2>
                  <button
                    className="btn-cancel"
                    onClick={() => this.props.errorDel()}
                  >
                    CLOSE
                  </button>
                </div>
              ) : null
            )}
      </div>
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
    errorDel: () => dispatch(toDelError())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Error);
