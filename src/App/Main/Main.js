import React from 'react'
import ProductList from './Products/ProductList'

const Main = ({
    addToCart,
}) => {
    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="row_main">
                        <div className="aside">
                            Filter
                        </div>
                        <div className="main-content">
                            <ProductList
                                addToCart={addToCart}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main