import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";

const ForecastCard = (props) => {
    const {weekDay, day, month, maxTemp, forecastIcon, forecastText} = props;
    const currentData = new Date();
    const isSelected = currentData.getDate() === day;
    return (
        <div className={cn('forecast__card', {'card--selected': isSelected})}>
            <p className="card__data">
                {weekDay} <br/>
                {day} {month}
            </p>
            <div className="card__icon">
                <img src={forecastIcon} alt={forecastText}/>
            </div>
            <span className="card__temp">{maxTemp}</span>
        </div>
    )
}

ForecastCard.propTypes = {
    weekDay: PropTypes.string,
    day: PropTypes.number,
    month: PropTypes.string,
    maxTemp: PropTypes.number,
    forecastIcon: PropTypes.string,
    forecastText: PropTypes.string
}

export default ForecastCard;