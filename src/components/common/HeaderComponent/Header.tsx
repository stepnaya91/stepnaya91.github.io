import React from "react"
import { Logo } from "../Logo"
import "./Header.scss"

export const Header: React.FC = () => {
    return(
        <div className="header-div">
            <Logo/>
        </div>
    )
}