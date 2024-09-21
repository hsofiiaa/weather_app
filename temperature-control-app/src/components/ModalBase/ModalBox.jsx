import React from 'react'

const ModalBox = ({children})=>{
    
    return(
        <div className="modal">
            <div className="modal-box">
                {children}
            </div>
        </div>
    )
}

export default ModalBox;