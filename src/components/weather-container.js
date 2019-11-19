import React from "react";

export default function WeatherContainer({children}) {
    return (
        <div className="container">
            <div>
             {children}
            </div>
        </div>
    );
};