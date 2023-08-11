import React from "react";
import ProductListItem from "./ProductListItem";
import Products from "./Products";


const ProductList = () => {
    return (
        <>
            <h1 className="page_title"> Product List</h1>
            <div className="product_list">
                {
                    Products.map(({
                        id, name, description, type, capacity, price
                    }) => (
                        <ProductListItem
                            key={id}
                            name={name}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                        />
                    ))
                }

            </div>
        </>
    )
}

export default ProductList