import React, { Component } from 'react';
import { connect } from 'react-redux'

import ShoppingBag from '../components/ShoppingBag/ShoppingBag'


class ShoppingBagContainer extends Component {
    render() {
        return (
            <ShoppingBag
            cartList={this.props.cart}
            cartTotalNoOfItems = {this.props.cartTotalNoOfItems}
            modifier={this.props.modifier}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartList.cart,
        cartTotalNoOfItems: state.cartList.cartTotalNumberOfProducts
    }
}
  
export default connect(
    mapStateToProps,
    null
)(ShoppingBagContainer);