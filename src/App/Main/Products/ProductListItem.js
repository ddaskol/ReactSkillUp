import React from "react";
import "./ProductListItem.css"
import PropTypes from "prop-types"

const ProductListItem = (
    { image, name, description, type, capacity, price }
) => {
    return (
        <div className="product_list_item">
            <div className="product_img">
                <img src={image} alt=""></img>
            </div>
            <div className="product_title">{name}</div>
            <div className="product_description">{description}</div>
            <div className="product_features">Type: {type} </div>
            <div className="product_features"> Capacity: {capacity} Gb</div>
            <div className="product_price">{price} $</div>
            <button className="btn_add_to_cart"> Add to cart</button>
        </div>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

ProductListItem.defaultProps = {
    description: "No description ...",
    image: "/images/no-image.png"
}

export default ProductListItem