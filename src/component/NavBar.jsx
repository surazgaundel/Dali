import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import {TiShoppingCart} from 'react-icons/ti'
import { useGlobalContext } from '../context'
export default function NavBar() {
  const {amount}=useGlobalContext();

  return (
    <nav>
        <div className="nav">
            <img className="nav-logo" src={Logo} alt='logo'/>
            <div className="nav-cart">
            <TiShoppingCart className="cart"/>
            <p className="item-number">{amount}</p>
            </div>
        </div>
    </nav>
  )
}
 