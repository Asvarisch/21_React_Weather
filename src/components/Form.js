//import React from 'react';
import React, { Component } from 'react'
// import Weather from "./Weather";

const apiKey = '4263cffacd44b1611a4b09699c7cb0c7';
class Form extends Component {
    handleSubmitWeather = event => {
        event.preventDefault();
        const city = event.currentTarget.city.value.trim();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(weather => {
                this.props.functionCallFromData(weather);
            })
            .catch(e => console.log(e.message));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitWeather}>
                <input type='text' name='city' placeholder='City' />
                <button type='submit'>Get weather</button>
            </form>
        )
    };
};

export default Form;