import React from "react";
import "./ProductListItem.css"

const ProductListItem = () => {
    return (
        <div className="product_list_item">
            <div className="product_title">iPhoneX</div>
            <div className="product_description"> This is IphoneX</div>
            <div className="product_features"> Type: phone</div>
            <div className="product_features"> Capacity: 64gb</div>
            <div className="product_price"> 1000$</div>
            <button className="btn_add_to_cart"> Add to cart</button>
        </div>
    )
}
export default ProductListItem