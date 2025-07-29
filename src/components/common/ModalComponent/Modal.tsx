import React, { ReactNode, useState } from "react"
import "./Modal.scss"
import "../../../app/App.scss"
import { createPortal } from "react-dom"

export interface ModalProps {
    visible: boolean,
    children: ReactNode
}

export const Modal: React.FC <ModalProps> = ({children, visible}) => {
    if (!visible) return null
    return(
        <>
            {createPortal(
            <div className='modal'>
                <div className='modal-dialog'>
                    <div className='modal-header'>
                        <h3 className='modal-title'>Подтвердите действие</h3>
                        <span className='modal-close'>
                            &times;
                        </span>
                    </div>
                    <div className='modal-body'>
                        <div className='modal-content'>{children}</div>
                    </div>
                    <div className='modal-footer'>
                        <button type="button">Закрыть</button>
                    </div>
                </div>
            </div>,document.body)}
        </>
    )
}