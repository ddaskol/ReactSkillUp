import React from "react";
import { keys } from 'lodash'
import "./cart.css"

import products from "../../Main/Products/Products";

const productsObject = products.reduce((obj, product) => ({
    ...obj,
    [product.id]: product
}), {})

console.log(productsObject)

export default function Cart({
    productsInCart
}) {
    return (
        <>
            <div className="cart text-center">
                {
                    keys(productsInCart).map(productId => (
                        <div key={productId}> {productsObject[productId].name}: {productsInCart[productId]}</div>

                    ))
                }
                <div>
                    Total: {
                        keys(productsInCart).reduce((total, productId) => (
                            total + (productsObject[productId].price * productsInCart[productId])
                        ), 0)
                    } $
                </div>

            </div>
        </>
    )
}

// export default Cart

