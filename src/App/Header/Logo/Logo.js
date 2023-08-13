import React from "react";

import logo from './logo.png'
import "./logo.css"


const Logo = () => {
    return (
        <>
            <div className="logo text-center">
                <a href="/"><img src={logo} alt="" /> </a>
            </div>
        </>
    )
}

export default Logo