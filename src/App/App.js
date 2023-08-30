import React, { Component } from 'react'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

    state = {
        // cartData: {
        //     count: 0,
        //     price: 0,
        // },
        productsInCart: {
            1: 3,
            2: 5,

        },
    }

    addToCart = (id, count) => {
        this.setState((prevState) => ({
            productsInCart: Object.assign({}, prevState.productsInCart, {
                [id]: prevState.productsInCart[id] + count
            })

        }))
    }
    render() {
        return (
            <>
                <Header
                    // cartData={this.state.cartData}
                    productsInCart={this.state.productsInCart}
                />
                <button
                    onClick={() => this.addToCart(2, 5)}
                >Add to cart</button>
                <Main
                // addToCart={this.addToCart}
                />
                <Footer />
            </>
        )
    }
}

export default App