import React from "react";
import { keys } from 'lodash'
import products, { getProductsObject } from '../../App/Main/Products/Products'

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(products)
}) => {
    return (
        <div>
            Total: {
                keys(productsInCart).reduce((total, productId) => (
                    total + (productsObject[productId].price * productsInCart[productId])
                ), 0)
            } $
        </div>
    )
}

export default CartTotal