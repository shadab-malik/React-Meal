import React from "react";
import VerticalFlex from "../../UI/VerticalFlex/VerticalFlex";
import './CartItem.css';

const CartItem=(props)=>{
    const onSubClickHandler=(event)=>{
        console.log(event.target);
        props.onSubClickHandler(parseInt(event.target.id),1);
    }

    const onAddClickHandler=(event)=>{
        props.onAddClickHandler(parseInt(event.target.id),1);
    };
    return ( 
    <div className="cart-item-container">
        <VerticalFlex className="cart-item-specifics">
            <h1>{props.name}</h1>
            <h3><span className="cart-item-price">&#8377; {props.price}</span><span className="cart-item-quantity">x {props.count}</span></h3>
        </VerticalFlex>
        <div className="btns">
            <button type="button" id={props.id} className="cart-item-btn" onClick={onSubClickHandler}>-</button>
            <button type="button" id={props.id} className="cart-item-btn" onClick={onAddClickHandler}>+</button>
        </div>
    </div>
    );

};

export default CartItem;