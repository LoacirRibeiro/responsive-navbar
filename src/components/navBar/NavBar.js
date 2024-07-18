// video Aula "Code Complete"

import React, { useState } from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import './NavBar.css'

function NavBar(){
    const [ menuOpen, setMenuOpen ] = useState(false)

    return(
        
        <nav>
            <Link to='/' className="title">Website</Link>
            <div 
                className="menu" 
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span> 
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li>
                    <NavLink to='/sobre' >Sobre</NavLink>        
                </li>
                <li>
                    <NavLink to='/servicos'>Servicos</NavLink>
                </li>
                <li>
                    <NavLink to='/contatos'>Contatos</NavLink>
                </li>
                
            </ul>
            
        </nav>
       
    );
}

export default NavBar