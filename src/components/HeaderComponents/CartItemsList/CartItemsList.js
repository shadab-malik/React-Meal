import React from "react";
import HorizontalLine from "../../UI/HorozontalLine/HorizontalLine";
import CartItem from "../CartItem/CartItem";
import './CartItemsList.css';

const CartItemsList=(props)=>{

    return (
        <React.Fragment>
            {props.items.map((item)=>{
                if(props.cart[item.id])
                return (
                    <React.Fragment>
                    <CartItem onAddClickHandler={props.addToCartHandler} onSubClickHandler={props.subFromCartHandler} name={item.name} price={item.rate} id={item.id} count={props.cart[item.id]}></CartItem>
                    <HorizontalLine></HorizontalLine>
                    </React.Fragment>
                    );
            })}

        </React.Fragment>
    );
};

export default CartItemsList;