import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import SideBar  from "../../components/SideBar/SideBar.jsx";
import Header from "../../components/Header/Header.jsx";

import './WidgetWrapper.scss'
const WidgetWrapper = ({children, temperature = 20, pageName}) => {

    const isHot= temperature > 20;
    const isCold= temperature <= 10;
    const isNeutral= temperature > 10 && temperature <= 20;

    return (
        <div className={cn('widget-container', {'hot' : isHot}, {'cold' : isCold}, {'neutral': isNeutral})}>
            <Header pageName={pageName}/>
            <SideBar/>
            {children}
        </div>
    )
}

WidgetWrapper.proptypes = {
    temperature: PropTypes.number,
    children: PropTypes.any,
    pageName: PropTypes.string
}

export default WidgetWrapper;