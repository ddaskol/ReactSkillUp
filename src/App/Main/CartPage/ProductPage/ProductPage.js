import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Products, { getProductsObject } from "../../Products/Products";

const ProductPage = ({
    productsObject = getProductsObject(Products)
}) => {
    const { id } = useParams();

    return (
        <>
            <div className="page_title ">{productsObject[id].name}</div>
            <div className="red" dangerouslySetInnerHTML={{
                __html: productsObject[id].fullDescription
            }}
            ></div>
        </>
    )

}

export default ProductPage