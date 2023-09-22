import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentsPage from './PaymentsPage/PaymentsPage'
import ShippingPage from './ShippingPage/ShippingPage'
import CartPage from './CartPage/CartPage'
import ProductList from './Products/ProductList'
import ProductPage from './CartPage/ProductPage/ProductPage';
import Testimonials from '../../Components/Testimonials/Testimonials';

const Main = ({
    addToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
    addLike,
    removeLike,
    productsLikeState,
}) => {
    const INNER_LINKS = {
        payments: '/payments',
    }

    return (
        <main className="main">
            <div className="container">
                <div className="row_main">
                    <div className="aside">
                        Filter
                    </div>
                    <div className="main-content">

                        <Routes>
                            {/* <Route path="/" exact Component={Testimonials} /> */}

                            <Route path="/" Component={() => (
                                <>
                                    <ProductList
                                        addToCart={addToCart}
                                        addLike={addLike}
                                        removeLike={removeLike}
                                        productsLikeState={productsLikeState}
                                    />
                                    <Testimonials />
                                </>
                            )} />

                            <Route path={INNER_LINKS.payments} Component={PaymentsPage} />
                            <Route path="/shipping" Component={ShippingPage} />
                            <Route path="/cart" Component={() => (
                                <CartPage
                                    productsInCart={productsInCart}
                                    removeProductFromCart={removeProductFromCart}
                                    changeProductQuantity={changeProductQuantity}

                                />
                            )}
                            />
                            <Route path="/products/:id" Component={ProductPage} />

                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main