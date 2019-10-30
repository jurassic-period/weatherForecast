import React from "react";

export default function ErrorMessage({ weatherData, errorDel }) {
  return (
    <div>
      {!weatherData.length
        ? null
        : weatherData.map(obj =>
            obj.cod === "404" ? (
              <div className="error-info" key={obj.cod}>
                <h2 className="title-error">
                  Unfortunately this city is not on our list, or you made a
                  mistake while entering, try again
                </h2>
                <button
                  ref={button => button && button.focus()}
                  className="btn-cancel"
                  onClick={() => errorDel()}
                >
                  CLOSE
                </button>
              </div>
            ) : null
          )}
    </div>
  );
}
