import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const {name, img, salary,id}=props.product;
    return (
        <div className='product-cart1'>
            <img src={img}/>
            <h4>Name: {name} </h4>
            <h4> Salary $:{salary} </h4> 
            <h6>Employee Id:  {id}</h6>
            <button onClick={() => props.handleAddToCart(props.product)}
            className='button-style'> HIRE ME </button>
        </div>
    );
};

export default Cart;