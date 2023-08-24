import React from "react";
import ProductListItem from "./ProductListItem";
import Products from "./Products";


const ProductList = ({
    addToCart,
}) => {
    return (
        <>
            <h1 className="page_title"> Product List</h1>
            <div className="product_list">
                {
                    Products.map(({
                        id, image, name, description, type, capacity, price
                    }) => (
                        <ProductListItem
                            key={id}
                            image={image}
                            name={name}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                            addToCart={addToCart}
                        />
                    ))
                }

            </div>
        </>
    )
}

export default ProductList