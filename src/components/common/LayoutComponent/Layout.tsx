import React from "react"
import { Header } from "../HeaderComponent/Header"
import "./Layout.scss"


export const Layout: React.FC = () => {
    return (
        <>
            <div className="layout-div">
                <Header/>
            </div>
        </>
    )
}