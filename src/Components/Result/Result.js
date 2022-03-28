import React from "react";

function index({ air }) {

  return (
    <>
      {typeof air.main != "undefined" && (
        <div className="result">
          <div className="city">{air.name}, {air.sys.country}</div>
          <div className="description">
            <div className="degre">{Math.round(air.main.temp)}</div>
            <div className="state">{air.weather[0].description}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default index;
