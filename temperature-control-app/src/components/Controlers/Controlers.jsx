import React from "react";
import PropTypes from 'prop-types';
import Button from "../Button/Button.jsx";
import './Controlers.scss';

const Controlers = (props) => {
    const {onCold, onHot, onModal, onModalTemperature} = props;

    return(
        <div className="widget-controllers">
            <div className="button-container">
                <Button className="_cold" onClick={onCold}>Cold</Button>
                <Button className="_hot" onClick={onHot}>Hot</Button>
                <Button onClick={onModal}>Modal Base</Button>
                <Button onClick={onModalTemperature}>Modal Temperature</Button>
            </div>
        </div>
    )
}

Controlers.propTypes ={
    onCold: PropTypes.func,
    onHot: PropTypes.func,
    onModal: PropTypes.func,
    onModalTemperature: PropTypes.func
}

export default Controlers
