import React from "react";
import { keys } from 'lodash'
import products, { getProductsObject } from "../../App/Main/Products/Products"
import CartProductListItem from "./CartProtuctListItem";


export default function CartProductList({
    productsInCart,
    productsObject = getProductsObject(products),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuantity,
}) {
    return (

        keys(productsInCart).map(productId => (
            <CartItem
                key={productId}
                product={productsObject[productId]}
                productCount={productsInCart[productId]}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
            />

        ))

    )
}