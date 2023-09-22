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
        productsLikeState: {
            1: true,
            2: true,
        }
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
    addLike = (productId) => {
        this.setState(prevState => ({
            productsLikeState: {
                ...prevState.productsLikeState,
                [productId]: true
            }
        }))
    }

    removeLike = (productId) => {
        this.setState(prevState => ({
            productsLikeState: {
                ...prevState.productsLikeState,
                [productId]: false
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
                    addLike={this.addLike}
                    removeLike={this.removeLike}
                    productsLikeState={this.state.productsLikeState}
                />
                <Footer />
            </>
        )
    }
}

export default App