//import React from 'react';
import React, { Component } from 'react'
import Data from "./Data";

class Weather extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        // if (this.props.weatherFromData === 'undefined') {
        //     return <div />
        // }
        return (
            <div>
                <p>{`Location: ${this.props.weatherFromData.location || ""}`}</p>
                <p>{`Temp: ${this.props.weatherFromData.temp || ""} C.`}</p>
                <p>{`Pressure: ${this.props.weatherFromData.pressure || ""} hPa`}</p>
                <p>{`Sunset: ${this.props.weatherFromData.sunset || ""}`}</p>
            </div>
        )
    }
}

export default Weather;