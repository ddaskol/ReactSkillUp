import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Products, { getProductsObject } from "../../Products/Products";

const ProductPage = ({
    productsObject = getProductsObject(Products)
}) => {
    const { id } = useParams();

    return (
        <>
            <h1 className="page_title">{productsObject[id].name}</h1>
        </>
    )

}

export default ProductPage