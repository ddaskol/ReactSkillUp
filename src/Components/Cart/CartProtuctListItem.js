import React from "react";

export default function CartProductListItem({
    product,
    productCount
}) {
    return (
        <div>
            {product.name} : {productCount}
        </div>
    )
}