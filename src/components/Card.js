import React from "react";
import { format } from "date-fns"; // from https://date-fns.org

export default function Card({ obj }) {
  const { name, speed, pressure, humidity } = obj;
  const { country, id, sunrise, sunset } = obj.sys;
  const { temp_max, temp_min } = obj.main;
  return (
    <div className="weather-elem col-md-4 col-sm-6">
      <h2 className="title-widget">
        {name}, {country}
      </h2>
      <h3 className="temp">{obj.main.temp}°C</h3>
      <p className="weather-p">
        {obj.weather[0].description[0].toUpperCase() +
          obj.weather[0].description.slice(1)}
      </p>
      <p className="weather-p">{format(obj.dt * 1000, "HH:mm MMM d")}</p>
      {!obj.firstCard ? (
        <div>
          <i
            className="fa fa-times-circle"
            onClick={() => this.props.delWeatherWidget(id)}
          ></i>
        </div>
      ) : null}
      <table className="weather-table">
        <tbody>
          <tr>
            <td className="weather-table__td">Wind</td>
            <td className="weather-table__td">{speed}m/s</td>
          </tr>
          <tr>
            <td className="weather-table__td">Tempreture (max/min)</td>
            <td className="weather-table__td">
              {temp_max}°C / {temp_min}°C
            </td>
          </tr>
          <tr>
            <td className="weather-table__td">Pressure</td>
            <td className="weather-table__td">{pressure} hpa</td>
          </tr>
          <tr>
            <td className="weather-table__td">Humidity</td>
            <td className="weather-table__td">{humidity} %</td>
          </tr>
          <tr>
            <td className="weather-table__td">Sunrise</td>
            <td className="weather-table__td">
              {format(sunrise * 1000, "HH:mm")}
            </td>
          </tr>
          <tr>
            <td className="weather-table__td">Sunset</td>
            <td className="weather-table__td">
              {format(sunset * 1000, "HH:mm")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
