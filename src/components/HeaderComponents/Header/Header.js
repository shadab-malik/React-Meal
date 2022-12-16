import React from "react";

import './Header.css'
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
const Header=(props)=>{

    return (
        <React.Fragment>
        <header className="header">
        <h1 className="header__title">ReactMeals</h1>
        <HeaderCartButton onClick={props.onButtonClick} items={props.items} cart={props.cart}></HeaderCartButton>
        </header>
        <div>
            <img  className="header__image" src={mealsImage} alt="Meals"/>
        </div>
        </React.Fragment>
    );
};

export default Header;