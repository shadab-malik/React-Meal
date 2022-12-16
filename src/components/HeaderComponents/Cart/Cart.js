import React from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import CartItemsList from "../CartItemsList/CartItemsList";
import './Cart.css'
const Cart=(props)=>{
    

    return (<React.Fragment>
    <div className="cart-background" onClick={props.onClick}></div>
    <Card className="meals-cart-card">
        {props.cart&&Object.keys(props.cart).length>0?<CartItemsList items={props.items} cart={props.cart} addToCartHandler={props.addToCartHandler} subFromCartHandler={props.subFromCartHandler}></CartItemsList>:<h1 style={{textAlign:"center",backgroundColor:"chocolate",borderRadius:"1rem"}}>EMPTY CART!!</h1>}
        {props.cart&&Object.keys(props.cart).length>0&&<div className="amount_container">
            <h1 className="part">Total Amount</h1>
            <h1 className="part">&#8377; {props.items.reduce((sum,item)=>{if(props.cart[item.id])
                                                                        return sum+=props.cart[item.id]*item.rate;
                                                                        else return sum;                         },0)}</h1>
        </div>}
        {
            props.cart&&Object.keys(props.cart).length>0&&
            <div style={{textAlign:"right"}}>
                <Button className="button-close" onClick={props.onClick}>Close</Button>
                <Button className="button-order" onClick={()=>{console.log('Ordering...');
                props.onClick();
                props.onOrder();
                }}>Order</Button>
            </div>
        }
    </Card>
    </React.Fragment>);


};

export default Cart;