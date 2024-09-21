import React from "react";
import WidgetWrapper from "../../compositions/WidgetWrapper/WidgetWrapper.jsx";
import Weather from "../../compositions/Weather/Weather.jsx";
import {useParams} from 'react-router-dom';

import './PageWeatherCity.scss'

const PageWeatherCity = () => {
    const {cityName} = useParams();

    return (
        <WidgetWrapper pageName={`Weather ${cityName}`}>
            <div className="weather__title">{cityName}</div>
            <Weather city={cityName}/>
        </WidgetWrapper>
    )
}

export default PageWeatherCity;