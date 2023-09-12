import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from './CartPage/CartPage'
import ProductList from './Products/ProductList'

const Main = ({
    addToCart,
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
                            <Route path="/cart" Component={CartPage} />
                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main