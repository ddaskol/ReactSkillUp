import React from "react";

export default function Quantity({
    productCount,
    onDecrementClick,
    onIncrementClick,
    minCount = 1,
}) {
    return (
        <div className="product_quantity">
            <button
                disabled={productCount <= minCount}
                onClick={onDecrementClick}
            >-</button>
            <input type="text" value={productCount} readOnly></input>
            <button
                disabled={productCount >= 10}
                onClick={() => onIncrementClick()}
            >+</button>
        </div>
    )
}