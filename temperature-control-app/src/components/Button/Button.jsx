import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import './Button.scss'
const Button = (props) => {
    const  {className, type = 'button', children, onClick, ...restProps} = props;

    return (
        <button className={cn('button', className)} type={type} onClick={onClick} {...restProps}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    restProps: PropTypes.object
}

export default Button;