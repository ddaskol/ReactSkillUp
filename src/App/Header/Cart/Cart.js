import React from "react";
import "./cart.css"
import { keys } from 'lodash'
import products, { getProductsObject } from "../../Main/Products/Products"
import { Link } from "react-router-dom"
import CartTotal from "../../../Components/Cart/CartTotal";


const Cart = ({
    productsInCart,
    productsObject = getProductsObject(products)
}) => {
    return (

        <div className="cart text-center">
            {
                keys(productsInCart).map(productId => (
                    <div key={productId}> {productsObject[productId].name}:
                        {productsInCart[productId]}</div>

                ))
            }
            <CartTotal
                productsInCart={productsInCart}
            />
            <Link to="/cart">Show Cart</Link>

        </div>

    )
}

export default Cart

