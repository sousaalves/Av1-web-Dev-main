import React from 'react';
import './Header.css';
import Logo  from '../assets/logo.png'

const Header = () => {
    console.log(window.location.pathname)

    let URL = []
   
    if(window.location.pathname === '/dashboard'){
        URL[0] = '/home';
        URL[1] = 'Início';
    }
    else{
        URL[0] = '/dashboard';
        URL[1] = 'Dashboard';
    }

    return (
       <div className="header">
            <span>
                <img src={Logo} alt="logo" className="logo" />
                <h2>Flash Cards</h2>
            </span>

            <a href={URL[0]}> {URL[1]} </a>
        </div>
    )
}

export default Header
