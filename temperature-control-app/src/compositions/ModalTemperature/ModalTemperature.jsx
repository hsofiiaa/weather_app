import React from "react";
import ModalWrapper from "../../components/ModalBase/ModalWrapper";
import ModalBox from "../../components/ModalBase/ModalBox";
import ModalHeader from "../../components/ModalBase/ModalHeader";
import ModalFooter from "../../components/ModalBase/ModalFooter";
import ModalContent from "../../components/ModalBase/ModalContent";
import PropTypes from 'prop-types'

 

const ModalTemperature =({children, onClose, isOpen, temperature}) =>{
    return (
        <ModalWrapper onClick={onClose} isOpen={isOpen}>
            <ModalBox>
                <ModalHeader>Temperature</ModalHeader>
                <ModalContent>
                    <div className="input">
                        <input className="input-box" type="text" value={temperature}/>
                    </div>
                </ModalContent>
                <ModalFooter>{children}</ModalFooter>
            </ModalBox>
        </ModalWrapper>
    )
}

ModalTemperature.propTypes = {
    children: PropTypes.any,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    temperature: PropTypes.number
}

export default ModalTemperature;