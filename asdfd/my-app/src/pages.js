import React from 'react';
import './Pages.css'

const Pages = () => {
    return (
        
            <div className='body'>
            {/* <h1>pages page</h1> */}
            <div className='container'>
                <div className='card'>
                    <div className='content' >
                        <h2>01</h2>
                        <h3>Card One</h3>
                        <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
                        <a href='#'> Read More</a>

                    </div>

                </div>
                //card one sesh
                <div className='card'>
                    <div className='content'>
                        <h2>02</h2>
                        <h3>Card Two</h3>
                        <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
                        <a href='#'> Read More</a>
                    </div>

                </div>
                <div className='card'>
                    <div className='content'>
                        <h2>03</h2>
                        <h3>Card Three</h3>
                        <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
                        <a href='#'> Read More</a>

                    </div>
                </div>
         </div>
        </div>
      
    );
};

export default Pages;