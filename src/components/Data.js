//import React from 'react';
import Form from "./Form";
import Weather from "./Weather";
import React, { Component } from 'react'

class Data extends Component {
  constructor() {
    super();
    this.state = {}
  }

  getDataFromForm = (dataFromForm) => {
    const sunsetTimeStamp = dataFromForm.sys.sunset;
    const date = new Date(sunsetTimeStamp*1000);
    const hours = date.getHours();
    const minutes = '0'+ date.getMinutes();
    const sunset = hours + ":" + minutes.substr(-2);

    this.setState({
      location: dataFromForm.name,
      temp: dataFromForm.main.temp,
      pressure: dataFromForm.main.pressure,
      sunset: sunset
    })
  }

  render() {
    return (
      <div>
        <Form functionCallFromData={this.getDataFromForm.bind(this)}/>
        <Weather weatherFromData={this.state}/>
      </div>
    )
  }
}

export default Data;


