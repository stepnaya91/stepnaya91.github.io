import React, { ReactNode } from "react"
import "./Modal.css"
import "../../../app/App.css"
import { createPortal } from "react-dom"
import { Button } from "../Button/Button";

export interface ModalProps {
    visible: boolean,
    children: ReactNode,
    onUpdateVisible?: (value:boolean)=>void
}

export const Modal: React.FC <ModalProps> = ({children, visible,onUpdateVisible}) => {
    const handleClick=()=>{
        onUpdateVisible(false);
    }
    if (!visible) return null
    return(
        <>
            {createPortal(
            <div className='modal'>
                <div className='modal-dialog'>
                    <div className='modal-header'>
                        <h3 className='modal-title'>Подтвердите действие</h3>
                        <span onClick={handleClick} className='modal-close'>
                            &times;
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className='modal-content'>{children}</div>
                    </div>
                    <div className='modal-footer'>
                        <Button onClick={handleClick} label={"Закрыть"}/>
                    </div>
                </div>
            </div>,document.body)}
        </>
    )
}