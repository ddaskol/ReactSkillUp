import React, { Component } from 'react'

import "../common/style/reset.css"
import "../common/style/base.css"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import { omit } from 'lodash'


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
    } //переписали в сховищі cartReducer

    removeProductFromCart = (productId) => {
        this.setState((prevState) => ({
            productsInCart: omit(prevState.productsInCart, [productId])
        }))
    }

    changeProductQuantity = (productId, quantity) => {
        this.setState((prevState) => ({
            productsInCart: {
                ...prevState.productsInCart,
                [productId]: quantity
            }
        }))
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
                    changeProductQuantity={this.changeProductQuantity}
                />
                <Footer />
            </>
        )
    }
}

export default App