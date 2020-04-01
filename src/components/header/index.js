import React from 'react';

import './styles.css'
import logo from '../../assets/Imagens/logo-minuto.png'

export default function Header() {
  return (
  <nav>
    <img src={logo} alt="logo"/>
    <ul>
        <li className="nav-inicio">Início</li>
        <div className="dropdown"><li>Brasil &darr;</li>
        <div className="dropdown-content">
            <li>Submenu 1</li>
            <li>Submenu 2</li>
            <li>Submenu 3</li>
            <li>Submenu 4</li>
            <li>Submenu 5</li>
            
        </div>
        </div>

        <li>Mundo</li>
        <li>Blogs</li>
        <li>Assine</li>

    </ul>
  </nav> 

  );
}
