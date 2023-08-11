import React from "react";
import "./ProductListItem.css"

const ProductListItem = (
    { name, description, type, capacity, price }
) => {
    return (
        <div className="product_list_item">
            <div className="product_title">{name}</div>
            <div className="product_description">{description}</div>
            <div className="product_features">Type: {type} </div>
            <div className="product_features"> Capacity: {capacity} Gb</div>
            <div className="product_price">{price} $</div>
            <button className="btn_add_to_cart"> Add to cart</button>
        </div>
    )
}
export default ProductListItem