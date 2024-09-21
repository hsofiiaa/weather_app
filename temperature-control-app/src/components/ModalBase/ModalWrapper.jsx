import React from "react";
import PropTypes from 'prop-types'
import './ModalBase.scss'

const ModalWrapper = ({children, onClick, isOpen}) => {
    const hendleClickOutSide = (event)=>{
        if(event.target.classList.contains("modal-wrapper")){
            onClick();
        }
    }
    
    return( 
        <>
            {isOpen && (<div className="modal-wrapper" onClick={hendleClickOutSide}>{children}</div>)}
        </>
    )
}
ModalWrapper.propsTypes = {
onClick: PropTypes.func,
isOpen: PropTypes.bool
}
export default ModalWrapper;