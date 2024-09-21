import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from 'react-router-dom';
import {daysArr, monthsArr} from "../../config/App.js";
import RightArrow from './icons/right-arrow.svg?react';
import './Header.scss';

const Header = ({pageName}) => {
    const navigate = useNavigate();

    const {pathname} = useLocation();
    const hasRoot = pathname === '/';

    const currentDate = new Date();
    const days = daysArr[currentDate.getDay()];
    const day = currentDate.getDate();
    const months = monthsArr[currentDate.getMonth()];

    const backPage = () => navigate(-1);


    return (
        <div className="header-wrapper">
            { !hasRoot && (
                <div className='header__page-name'>
                <span className='btn-back' onClick={backPage}>
                    <RightArrow/>
                </span>
                    {pageName}
                </div>
            )}
            <div className="header">
                <div className="current-date">
                    <p className="day">{days}</p>
                    <p className="data">{day} {months}</p>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    pageName: PropTypes.string
}
export default Header
