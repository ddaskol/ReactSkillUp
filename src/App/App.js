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
        },
    }

    addToCart = (id, count) => {
        this.setState((prevState) => ({
            productsInCart: {
                ...prevState.productsInCart,
                [id]: (prevState.productsInCart[id] || 0) + count,


            }

        }))
    }
    render() {
        return (
            <>
                <Header
                    // cartData={this.state.cartData}
                    productsInCart={this.state.productsInCart}
                />

                <Main
                    addToCart={this.addToCart}
                />
                <Footer />
            </>
        )
    }
}

export default App