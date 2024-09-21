import React from "react";
import ModalBox from "./ModalBox";
import ModalClose from "./ModalClose";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalWrapper from "./ModalWrapper";
import Button from "../Button/Button.jsx";

const ModalBase =({onClose, isOpen, onModal})=>{
    return (
        <ModalWrapper onClick={onClose} isOpen={isOpen}>
            <ModalBox>
                <ModalClose onClick={onClose}/>
                <ModalHeader>BaseModel</ModalHeader>
                <ModalContent>BaseModelContent</ModalContent>
                <ModalFooter>
                <div className="button-wrapper">
                    <Button type="button" className="modal-btn" onClick={onModal}>OK</Button>
                    <Button type="button" className="modal-btn"  onClick={onClose}>Cansel</Button>
                </div>
                </ModalFooter>
            </ModalBox>
        </ModalWrapper>
    )
}

export default ModalBase;