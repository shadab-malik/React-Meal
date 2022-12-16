import React, { useContext } from "react";
import CartContext from "../../../storage/cart-context";
import VerticalFlex from "../../UI/VerticalFlex/VerticalFlex";
import './Meals.css';
const Meals=(props)=>{
    const [count,setcount]=React.useState(1);
    const cntxt=useContext(CartContext);
    
    const onsubmithandler=(event)=>{
        event.preventDefault();
        cntxt(event.target.id,count);
        setcount(1);
    }; 

    const onChangeHandler=(event)=>{
        setcount(event.target.value);
    };

    return (
    <div className="meals">
        <VerticalFlex className="meals__description">
            <h2>{props.name}</h2>
            <p style={{fontStyle:"italic",fontSize:"1.2rem"}}>{props.summary}</p>
            <h3 style={{color:"chocolate",fontSize:"1.5rem"}}>&#8377; {props.price}</h3>
        </VerticalFlex>
        
        <form id={props.id} onSubmit={onsubmithandler}>
        <label htmlFor="quantity">Quantity </label>
        <input onChange={onChangeHandler} name="quantity" className="meals__quantitybox" type="number" min="1" value={count}></input>
        <button  className="meals__quantity__add" type="submit" >+  Add </button>
        </form>
    </div>);
};

export default Meals;