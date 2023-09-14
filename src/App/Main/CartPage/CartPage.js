import React from "react";
import { keys } from 'lodash'
import Cart from "../../Header/Cart/Cart";
import products from '../Products/Products'

const productsObject = products.reduce((obj, product) => ({
    ...obj,
    [product.id]: product
}), {})

const CartPage = ({
    productsInCart
}) => {
    return (
        <>
            <h1 className="page-title">CartPage</h1>
            {
                keys(productsInCart).map(productId => (
                    <div key={productId}> {productsObject[productId].name}:
                        {productsInCart[productId]} : {productsObject[productId].price}$
                    </div>

                ))
            }
            <div>
                Total: {
                    keys(productsInCart).reduce((total, productId) => (
                        total + (productsObject[productId].price * productsInCart[productId])
                    ), 0)
                } $
            </div>
        </>
    )
}

export default CartPage
