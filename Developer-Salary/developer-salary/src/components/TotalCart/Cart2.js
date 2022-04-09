import React from 'react';
import './Cart2.css'

const Cart2 = (props) => {
   // const {name, salary,id}=props.product;
    return (
        <div>
            
               <h4>DEVELOPER SALARY TOTAL $ {props.cart.lenth}</h4>
               <h4>Item: {props.cart.length}</h4>
               
              
              
        </div>
    );
};

export default Cart2;