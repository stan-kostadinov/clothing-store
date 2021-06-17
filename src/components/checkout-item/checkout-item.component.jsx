import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <div className="checkout-item">
        <div classNamei="image-container">
            <img alt="item" src={ imageUrl } />
        </div>
        <span className="name"> { name } </span>
        <span className="quantity"> { quantity } </span>
        <span className="price"> ${ price } </span>
        <div className="remove-button"> &#10006; </div>
    </div>
)

export default CheckoutItem;