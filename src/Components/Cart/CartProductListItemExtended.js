import React from "react";
import Quantity from "../Quantity/Quantity";
import "./CartProductListItemExtended.css"
import { connect } from "react-redux";


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
    isLiked
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
                <button>
                    {isLiked ? <span>&#9825;</span> : <span>&#9829;</span>}

                </button>
            </div>
        </div>
    </div>
)
const mapState = (state, { id }) => ({
    isLiked: state[id]
})

export default connect(
    mapState
)(CartProductListItemExtended)

// const mapState = (state, { id }) => ({
//     isLiked: state[id]
// })

// export default connect(
//     mapState
// )(ProductListItem)