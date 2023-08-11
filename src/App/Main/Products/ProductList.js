import React from "react";
import ProductListItem from "./ProductListItem";


const ProductList = () => {
    return (
        <>
            <h1 className="page_title"> Product List</h1>
            <div className="product_list">
                <ProductListItem
                    name="iPhone X"
                    description="This is iPhone X"
                    type="phone"
                    capacity="64gb"
                    price="1000"
                />
                <ProductListItem
                    name="Iphone XS"
                    description="This is iPhone XS"
                    type="phone"
                    capacity="64"
                    price="1000"
                />
                <ProductListItem
                    name="Iphone 12"
                    description="This is iPhone 12"
                    type="phone"
                    capacity="64"
                    price="1000"
                />
                <ProductListItem
                    name="Iphone 13"
                    description="This is iPhone 13"
                    type="phone"
                    capacity="64"
                    price="1000"
                />
            </div>
        </>
    )
}

export default ProductList