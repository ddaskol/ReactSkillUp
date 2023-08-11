import React from "react";
import "./ProductListItem.css"

const ProductListItem = (props) => {
    return (
        <div className="product_list_item">
            <div className="product_title">{props.name}</div>
            <div className="product_description">{props.description}</div>
            <div className="product_features">Type: {props.type} </div>
            <div className="product_features"> Capacity: {props.capacity} Gb</div>
            <div className="product_price">{props.price} $</div>
            <button className="btn_add_to_cart"> Add to cart</button>
        </div>
    )
}
export default ProductListItem