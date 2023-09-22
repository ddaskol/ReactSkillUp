import React from "react";
import ProductListItem from "./ProductListItem";
import Products from "./Products";


const ProductList = ({
    addToCart,
    addLike,
    removeLike,
    productsLikeState
}) => {
    return (
        <>
            <h1 className="page_title">`Product List</h1>
            <div className="product_list">
                {
                    Products.map(({
                        id, image, name, description, type, capacity, price
                    }) => (
                        <ProductListItem
                            key={id}
                            id={id}
                            image={image}
                            name={name}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                            addToCart={addToCart}
                            addLike={addLike}
                            removeLike={removeLike}
                            isLiked={productsLikeState[id]}
                        />
                    ))
                }

            </div>
        </>
    )
}

export default ProductList