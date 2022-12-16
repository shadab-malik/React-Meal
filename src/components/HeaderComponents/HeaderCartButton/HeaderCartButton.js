import React from "react";
import CartIcon from "./CartIcon";
import reactDom from "react-dom";
import './HeaderCartButton.css';

const HeaderCartButton=(props)=>{

    let count_incart=0;
    for(var key in props.cart)
    {
        count_incart+=props.cart[key];
    }

    const clickHandler=()=>{
        props.onClick();
    };



    return (
        <React.Fragment>
        
        <button className="cartbutton" onClick={clickHandler}>
        <span><CartIcon className="carticon"></CartIcon></span>
        <span className="carttext">Your Cart</span>
        <span className="cart-items-count">{count_incart}</span>
        </button>
        </React.Fragment>
    );
};

export default HeaderCartButton;
