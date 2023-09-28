import React from 'react'

import "./header.css"

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'

const Header = () => {
    return (
        <>
            <header className="header">
                <Logo />
                <Menu />
                <Cart />
            </header>
        </>
    )
}

export default Header