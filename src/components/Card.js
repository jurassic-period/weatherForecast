import React from "react";
import { format } from "date-fns"; // from https://date-fns.org
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function Card({ obj, delWidget }) {
  const {
    name,
    id,
    weather,
    sys: { country, sunrise, sunset },
    main: { temp, pressure, humidity, temp_max, temp_min },
    wind: { speed }
  } = obj;
  return (
    <div className="weather-elem col-md-4 col-sm-6">
      <h2 className="title-widget">
        {name}, {country}
      </h2>
      <h3 className="temp">{temp}°C</h3>
      <p className="weather-p">
        {weather[0].description[0].toUpperCase() +
          weather[0].description.slice(1)}
      </p>
      <p className="weather-p">{format(obj.dt * 1000, "HH:mm MMM d")}</p>
      {!obj.firstCard && (
        <div>
          <i className="fa fa-times-circle" onClick={() => delWidget(id)}></i>
        </div>
      )}
      <Table className="weather-table" size="small" aria-label="a dense table">
        <TableBody>
          <TableRow>
            <TableCell className="weather-cell">Wind</TableCell>
            <TableCell align="right">{speed} m/s</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="weather-cell">Tempreture (max/min)</TableCell>
            <TableCell align="right">
              {temp_max}°C / {temp_min}°C
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="weather-cell">Pressure</TableCell>
            <TableCell align="right">{pressure} hpa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="weather-cell">Humidity</TableCell>
            <TableCell align="right">{humidity} %</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="weather-cell">Sunrise</TableCell>
            <TableCell align="right">
              {format(sunrise * 1000, "HH:mm")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="weather-cell">Sunset</TableCell>
            <TableCell align="right">
              {format(sunset * 1000, "HH:mm")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
