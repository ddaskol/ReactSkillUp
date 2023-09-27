import React from "react";
import Quantity from "../Quantity/Quantity";
import "./CartProductListItemExtended.css"
import { connect } from "react-redux";


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
    isLiked,
    addLike,
    removeLike
}) => (
    <div className="cart_product_list_item_description">
        <div className="row">
            <div className="col_lg_3">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="col_lg_9">
                <p className="cart_extended_name">
                    <span className="bold"> {product.name} </span>
                </p>
                <p className="cart_extended_price">
                    Price for one CartItem: <span className="bold">$ {product.price}</span>
                </p>
                <p className="cart_extended_count">
                    Selected quantity: <span className="bold"> {productCount} </span>
                </p>
                <p className="cart_extended_sum">
                    Sum for this item:  <span className="bold sum_price">$  {(product.price * productCount)} </span>
                </p>
                <Quantity
                    productCount={productCount}
                    onIncrementClick={() => changeProductQuantity(product.id, productCount + 1)}
                    onDecrementClick={() => productCount === 1 ?
                        removeProductFromCart(product.id)
                        :
                        changeProductQuantity(product.id, productCount - 1)}
                    minCount={0}
                />
                <button className="btn_delete" onClick={() => removeProductFromCart(product.id)}> Delete Product</button>
                <button
                    onClick={() => isLiked ? removeLike(product.id) : addLike(product.id)}
                >
                    {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}

                </button>
            </div>
        </div>
    </div>
)
const mapState = (state, { product }) => ({
    isLiked: state.productsLikeState[product.id]
})
const mapDispatch = dispatch => ({
    addLike: (id) => dispatch({
        type: "LIKE",
        id
    }),
    removeLike: (id) => dispatch({
        type: "DISLIKE",
        id
    }),
    changeProductQuantity: (id, count) => dispatch({
        type: "CHANGE_PRODUCT_QUANTITY",
        id,
        count
    }),
    removeProductFromCart: (id, count) => dispatch({
        type: "REMOVE_PRODUCT_FROM_CART",
        id,
        count
    })
})

export default connect(
    mapState,
    mapDispatch
)(CartProductListItemExtended)

