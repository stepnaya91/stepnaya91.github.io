import "../../../app/App.scss"
import React, { useState } from "react"
import { Modal } from "../ModalComponent/Modal"



export const FillInputModal: React.FC  = ()=>{
    const [visible,setVisible]=useState<boolean>(false);
    const [text,setText] =useState<string>("");

    return(
        <>
            <Modal visible={visible}><input value={text}></input></Modal>
            <input onChange={(e)=>{setText(e.target.value)}} value={text}></input>
            <button onClick={()=>setVisible(true)} type="button">Показать текст</button>
        </>
    )
}