// import React from "react";

import { array } from "prop-types"

const Products = [
    {
        id: 1,
        name: "Iphone X",
        description: "This is iPhone X",
        type: "phone",
        capacity: 64,
        price: 1000,
        image: "/images/iPhone.png",
    },
    {
        id: 2,
        name: "Iphone XS",
        description: "This is iPhone XS",
        type: "phone",
        capacity: 64,
        price: 10000,
        image: "/images/iPhone.png",

    },
    {
        id: 3,
        name: "Iphone 13",
        description: "This is iPhone 13",
        type: "phone",
        capacity: 64,
        price: 1000,
        image: "/images/iPhone.png",

    },
    {
        id: 4,
        name: "Iphone 12",
        description: "This is iPhone 12",
        type: "phone",
        capacity: 64,
        price: 500,
        // image: "/images/no-image.png",

    },
]

export const getProductsObject = array => array.reduce((obj, product) => ({
    ...obj,
    [product.id]: product
}), {})

export default Products