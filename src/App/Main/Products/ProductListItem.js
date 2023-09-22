import React, { Component } from "react";
import "./ProductListItem.css"
import PropTypes from "prop-types"
import Quantity from "../../../Components/Quantity/Quantity";
import { Link } from "react-router-dom";

class ProductListItem extends Component {

    state = {
        productCount: 1,

    }
    onIncrementClick() {
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1,
        }))
    }
    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1,
        }))
    }

    render() {
        const { id, image, name, description, type, capacity, price, addToCart, addLike, removeLike, isLiked } = this.props

        return (
            <div className="product_list_item">
                <div className="product_img">
                    <img src={image} alt=""></img>
                </div>
                <button
                    onClick={() => isLiked === true ? removeLike(id) : addLike(id)}
                >
                    {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                </button>
                <Link to={`/products/${id}`}>
                    <div className="product_title">{name}</div>
                </Link>
                <div className="product_description">{description}</div>
                <div className="product_features">Type: {type} </div>
                <div className="product_features"> Capacity: {capacity} Gb</div>
                <Quantity
                    productCount={this.state.productCount}
                    onDecrementClick={() => this.onDecrementClick()}
                    onIncrementClick={() => this.onIncrementClick()}
                />
                <div className="product_price">{price} $</div>
                <button className="btn_add_to_cart"
                    onClick={() => addToCart(id, this.state.productCount)}
                > Add to cart</button>
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