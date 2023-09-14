import React from "react";
import "./css.css"

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart
}) => (
    <div className="cart_product_list_item_description">
        <div className="row">
            <div className="col_lg_3">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="col_lg_9">
                <p className="cart_extended_name">
                    <span> {product.name} </span>
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
                <button onClick={() => removeProductFromCart(product.id)}> Delete Product</button>

            </div>
        </div>
    </div>
)

export default CartProductListItemExtended