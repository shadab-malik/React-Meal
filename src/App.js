import React, { useEffect } from "react";
import reactDom from "react-dom";
import Header from "./components/HeaderComponents/Header/Header";
import MealsList from "./components/MealComponents/MealsList/MealsList";
import Card from "./components/UI/Card/Card";
import './App.css';
import Cart from "./components/HeaderComponents/Cart/Cart";
import CartContext from "./storage/cart-context";

const items=[{id:0, name:"Sushi",description:"Finest fish and veggies",rate:340.50},
             {id:1, name:"Schnitzel",description:"A german speciality!",rate:250.50},
             {id:2,name:"Barbecue",description:"American, raw, meaty",rate:230.99},
             {id:3,name:"Green Bowl",description:"Healty...and green...",rate:200.00}];
function App() {

  
  const [cart,setcart]=React.useState(JSON.parse(localStorage.getItem("CART")));
  const [showcart,setshowcart]=React.useState(false);
  const addToCartHandler=(id,count)=>{
        setcart((cart)=>{
            let newcart={...cart};
            if(!newcart[id])
            newcart[id]=parseInt(count);
            else
            newcart[id]+=parseInt(count);
            localStorage.setItem("CART",JSON.stringify(newcart));
            return newcart;
        });
       
    };

    const subFromCartHandler=(id,count)=>{
      setcart((cart)=>{
        let newcart={...cart};
        if(newcart[id]==parseInt(count))
        delete(newcart[id]);
        else
        newcart[id]-=parseInt(count);
        localStorage.setItem("CART",JSON.stringify(newcart));
        return newcart;
    });
    
    }

    const resetcart=()=>{
      setcart(()=>{
        localStorage.removeItem("CART");
        return {}
      }
        )};
    const clickHandler=()=>{
      setshowcart(true);  
    };
  
  
    return (
    <CartContext.Provider value={addToCartHandler}>
      {showcart&&reactDom.createPortal(<Cart onOrder={resetcart} onClick={clickHandler} items={items} cart={cart} addToCartHandler={addToCartHandler} subFromCartHandler={subFromCartHandler} onClick={()=>{setshowcart(false)}}></Cart>,document.getElementById('cart'))}
      <Header onButtonClick={clickHandler} items={items} cart={cart}></Header>
      <Card className="mealscard">
        <MealsList list={items}></MealsList>
      </Card>
      </CartContext.Provider>
  );
}

export default App;
