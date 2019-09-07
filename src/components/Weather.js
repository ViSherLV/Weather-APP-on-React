import React from "react";

const Weather = props =>

    <div className="infoWeath">
    {props.city&&
    <div>
    <p>Location: {props.city}, {props.country}</p>
    <p>Temperature: {props.temp.toFixed(0)}</p>
    <p>Atmospheric pres.: {props.pressure} Pa</p>
    <p>Sunrise: {props.sunrise}</p>
    </div>
  }
  <p className="error">{props.error} </p>
    </div>


export default Weather;
