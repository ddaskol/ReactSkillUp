import React from "react"

import "./menu.css"

const Menu = () => {
    return (
        <>
            <div className="menu">
                <ul className="menu_list">
                    <li className="menu_list_item"><a href="/" className="menu_link"> Home</a></li>
                    <li className="menu_list_item"><a href="/" className="menu_link"> Products</a></li>
                    <li className="menu_list_item"><a href="/" className="menu_link"> Payments</a></li>
                    <li className="menu_list_item"><a href="/" className="menu_link"> Shipping</a></li>
                </ul>
            </div>
        </>
    )
}

export default Menu

