import React from "react";
import "./cart.css"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import CartTotal from "../../../Components/Cart/CartTotal";
import CartProductList from "../../../Components/Cart/CartProductList";

const Cart = ({
    productsInCart,
}) => {
    return (

        <div className="cart text-center">
            {
                <CartProductList
                    productsInCart={productsInCart}
                />
            }
            <CartTotal
                productsInCart={productsInCart}
            />
            <Link to="/cart">Show Cart</Link>

        </div>

    )
}
const mapState = state => ({
    productsInCart: state.productsInCart
})
export default connect(
    mapState
)(Cart)

