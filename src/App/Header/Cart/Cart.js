import React from "react";
import "./cart.css"
import products from "../../Main/Products/Products";

const productsObject = products.reduce((obj, product) => ({
    ...obj,
    [product.id]: product
}), {})

console.log(productsObject)

const Cart = ({
    productsInCart
}) => {
    return (
        <>
            <div className="cart text-center">
                {
                    Object.keys(productsInCart).map(productId => (
                        <div key={productId}> {products[productId - 1].name}: {productsInCart[productId]}</div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart

