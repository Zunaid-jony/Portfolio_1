import React from 'react';
import log from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={log} alt=''/>
            <nav>
                <a href='/shop'>Shop</a>
                <a href='/order'>Order Review</a>
                <a href='/inventory'>Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;