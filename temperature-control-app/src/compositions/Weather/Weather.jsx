import React, {useEffect, useState} from 'react';
import {sendRequest} from "../../helpers/SendRequest.js";
import Meta from "./components/Meta/Meta.jsx";
import Forecast from "./components/Forecast/Forecast.jsx";
import {API_URL, API_KEY} from "../../config/API.js";
import {daysArr, monthsArr} from "../../config/App.js";

const Weather = ({city = 'Kyiv'}) => {
    const [meta, setMeta] = useState({})
    const [forecast, setForecast] = useState([]);

    //http://api.weatherapi.com/v1/forecast.json?key=72ba1fa11a3d475e907182935232205&q=Vinnytsya&days=3&aqi=no&alerts=no
    useEffect(() => {
        sendRequest(`${API_URL}?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`)
            .then((data) => {
                const {current, forecast, location} = data;
                    setMeta({
                        city: city,
                        cloud: current.cloud,
                        humidity: current.humidity,
                        feelslike: current.feelslike_c
                    });
                    const updateForecast = forecast.forecastday.map((item) => {
                        let currentDate = new Date(item.date);
                        let weekDay = daysArr[currentDate.getDay()];
                        let day = currentDate.getDate();
                        let month = monthsArr[currentDate.getMonth()];
                        return {
                            date: item.date,
                            day: day,
                            month: month,
                            weekDay: weekDay,
                            forecastIcon: item.day.condition.icon,
                            forecastText: item.day.condition.text,
                            maxTemp: item.day.maxtemp_c
                        }
                    });
                    setForecast(updateForecast)
            })
    }, [])

    return (
        <div className='weather-wrapper'>
            <Meta
                city={meta?.city}
                cloud={meta?.cloud}
                humidity={meta?.humidity}
                feelslike={meta?.feelslike}
            />

            <Forecast
                cards={forecast}
            />
        </div>
    )
}

export default Weather;