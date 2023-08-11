import React from "react";
import ProductListItem from "./ProductListItem";


const ProductList = () => {
    return (
        <>
            <h1 className="page_title"> Product List</h1>
            <div className="product_list">
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
            </div>
        </>
    )
}

export default ProductList