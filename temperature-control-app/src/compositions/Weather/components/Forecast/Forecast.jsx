import React from 'react';
import PropTypes from 'prop-types';
import ForecastCard from "./ForecastCard.jsx";

import './Forecast.scss'

const Forecast = ({cards}) => {
    return (
        <div className="forecast">
            {cards?.map((card, index) => (
                <ForecastCard
                    key={index}
                    day={card.day}
                    month={card.month}
                    weekDay={card.weekDay}
                    maxTemp={card.maxTemp}
                    forecastIcon={card.forecastIcon}
                    forecastText={card.forecastText}
                />
            ))}
        </div>
    )
}

Forecast.propTypes = {
    cards: PropTypes.array
}
export default Forecast;