import "../../../app/App.scss"
import React, { ReactNode, useState } from "react"
import { Modal } from "../ModalComponent/Modal"



export const FillInputModal: React.FC  = ()=>{
    const [visible,setVisible]=useState<boolean>(false);
    const [childrenNode,setChildrenNode] = useState<ReactNode>(null);
    const [text,setText] =useState<string>("");
    const ShowModal=()=>{
        setVisible(!visible);
        setChildrenNode(()=>{return(
            <input value={text}></input>
        )});
    }

    const ChangeInput=(text:string)=>{
        setText(text);
    }

    return(
        <>
            <Modal visible={visible}>{childrenNode}</Modal>
            <input onChange={(e)=>ChangeInput(e.target.value)} value={text}></input>
            <button onClick={ShowModal} type="button">Показать текст</button>
        </>
    )
}