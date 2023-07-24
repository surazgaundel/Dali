import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import {TiShoppingCart} from 'react-icons/ti'
export default function NavBar() {
    const [itemNumber,setItemNumber]=useState(0)
  return (
    <nav>
        <div className="nav">
            <img className="nav-logo" src={Logo} alt='logo'/>
            <div className="nav-cart">
            <TiShoppingCart className="cart"/>
            <p className="item-number">{itemNumber}</p>
            </div>
        </div>
    </nav>
  )
}
