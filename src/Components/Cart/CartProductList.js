import React from "react";
import { keys } from 'lodash'
import products, { getProductsObject } from "../../App/Main/Products/Products"


export default function CartProductList({
    productsInCart,
    productsObject = getProductsObject(products)
}) {
    return (

        keys(productsInCart).map(productId => (
            <div key={productId}> {productsObject[productId].name}:
                {productsInCart[productId]}</div>

        ))

    )
}