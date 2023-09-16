import React, { Component } from 'react'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


class App extends Component {

    state = {

        productsInCart: {
            1: 3,
            2: 5,
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

    removeProductFromCart = (productId) => {
        this.setState((prevState) => {
            // const prevProductsInCart = { ...prevState.productsInCart }
            const prevProductsInCart = Object.assign({}, prevState.productsInCart)

            delete prevProductsInCart[productId];
            return {
                productsInCart: prevProductsInCart
            }
        })

    }
    render() {
        return (
            <>
                <Header
                    productsInCart={this.state.productsInCart}
                />
                <Main
                    addToCart={this.addToCart}
                    productsInCart={this.state.productsInCart}
                    removeProductFromCart={this.removeProductFromCart}
                />
                <Footer />
            </>
        )
    }
}

export default App