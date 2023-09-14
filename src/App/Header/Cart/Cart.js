import React from "react";
import "./cart.css"
import { keys } from 'lodash'
import products from "../../Main/Products/Products"
import { Link } from "react-router-dom"

const productsObject = products.reduce((obj, product) => ({
    ...obj,
    [product.id]: product
}), {})

export default function Cart({
    productsInCart
}) {
    return (

        <div className="cart text-center">
            {
                keys(productsInCart).map(productId => (
                    <div key={productId}> {productsObject[productId].name}:
                        {productsInCart[productId]}</div>

                ))
            }
            <div>
                Total: {
                    keys(productsInCart).reduce((total, productId) => (
                        total + (productsObject[productId].price * productsInCart[productId])
                    ), 0)
                } $
            </div>
            <Link to="/cart">Show Cart</Link>

        </div>

    )
}

// export default Cart

