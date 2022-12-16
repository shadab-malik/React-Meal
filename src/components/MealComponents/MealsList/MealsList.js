import React from "react";
import HorizontalLine from "../../UI/HorozontalLine/HorizontalLine";
import Meals from "../Meals/Meals";
const MealsList=(props)=>{

    return (
        
        
        <ul>{props.list.map((item)=>{
            return (<React.Fragment><Meals id={item.id} key={item.id} name={item.name} summary={item.description} price={item.rate}></Meals>
                    <HorizontalLine></HorizontalLine></React.Fragment>);
        })}</ul>
        
    );
};

export default MealsList;