import React from 'react';
import useProducts from './../../Hoks/useProducts';
import useCart from '../../Hoks/useCart'
import Cart from './../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products]=useProducts();
    const [cart, setCart]= useCart(products)
    const handleRemove = key => {
       const newCart = cart.filter(product=> product.key !== key);
       setCart(newCart)
       removeFromDb(key);

    }
    return ( 
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <Reviewitem 
                         product={product}
                         key={product.key}
                         handleRemove={handleRemove}
                         
                         ></Reviewitem> )
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;