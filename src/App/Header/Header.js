import React from 'react'

import "./header.css"

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'

const Header = ({
    // cartData
    productsInCart,
}) => {
    return (
        <>
            <header className="header">
                <Logo />
                <Menu />
                <Cart
                    // count={cartData.count}
                    // price={cartData.price}
                    productsInCart={productsInCart}
                />
            </header>
        </>
    )
}

export default Header