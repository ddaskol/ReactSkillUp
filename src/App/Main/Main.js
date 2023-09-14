import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentsPage from './PaymentsPage/PaymentsPage'
import ShippingPage from './ShippingPage/ShippingPage'
import CartPage from './CartPage/CartPage'
import ProductList from './Products/ProductList'

const Main = ({
    addToCart,
    productsInCart,
    removeProductFromCart
}) => {
    return (
        <main className="main">
            <div className="container">
                <div className="row_main">
                    <div className="aside">
                        Filter
                    </div>
                    <div className="main-content">
                        {/* */}
                        <Routes>
                            <Route path="/" exact Component={() => (
                                <ProductList
                                    addToCart={addToCart}
                                />
                            )} />
                            <Route path="/payments" Component={PaymentsPage} />
                            <Route path="/shipping" Component={ShippingPage} />

                            <Route path="/cart" Component={() => (
                                <CartPage
                                    productsInCart={productsInCart}
                                    removeProductFromCart={removeProductFromCart}
                                />
                            )}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main