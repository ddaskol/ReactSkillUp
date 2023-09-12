import React from "react"

import "./menu.css"
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <>
            <div className="menu">
                <ul className="menu_list">
                    <li className="menu_list_item"><Link to="/" className="menu_link"> Home</Link></li>
                    <li className="menu_list_item"><Link to="/" className="menu_link"> Products</Link></li>
                    <li className="menu_list_item"><Link to="/payments" className="menu_link"> Payments</Link></li>
                    <li className="menu_list_item"><Link to="/shipping" className="menu_link"> Shipping</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Menu

