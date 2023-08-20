import React, { Component } from "react";
import "./ProductListItem.css"
import PropTypes from "prop-types"

class ProductListItem extends Component {

    constructor() {
        super()
        this.onIncrementClick = this.onIncrementClick.bind(this)
    }

    state = {
        productCount: 1,
    }
    onIncrementClick() {

        this.setState((prevState) => ({
            productCount: prevState.productCount + 1,
        }))
    }
    onDecrementClick() {
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1,
        }))
    }

    render() {
        console.log(this)
        const { image, name, description, type, capacity, price } = this.props

        return (
            <div className="product_list_item">
                <div className="product_img">
                    <img src={image} alt=""></img>
                </div>
                <div className="product_title">{name}</div>
                <div className="product_description">{description}</div>
                <div className="product_features">Type: {type} </div>
                <div className="product_features"> Capacity: {capacity} Gb</div>
                <div className="product_quantity">
                    <button
                    >-</button>
                    <input type="text" value={this.state.productCount} readOnly></input>
                    <button
                        onClick={this.onIncrementClick}
                    >+</button>
                </div>
                <div className="product_price">{price} $</div>
                <button className="btn_add_to_cart"> Add to cart</button>
            </div>
        )
    }
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

ProductListItem.defaultProps = {
    description: "No description ...", //if Pr not have Desc
    image: "/images/no-image.png" //if Product no have img - this default image
}

export default ProductListItem