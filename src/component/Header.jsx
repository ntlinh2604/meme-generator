import React from 'react';

const Header = () => {
     
    return(
        <header className='header'>
            <img className='header--img' src="/troll-face.png" alt="" />
            <h2 className='header--title'>Meme Generator</h2>
           
            <p className='header--project'>React Course - Project 3</p>
        </header>
    )
};

export default Header;