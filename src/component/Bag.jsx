import React, { useState } from 'react'
import {FaShoppingBasket,FaMinus,FaPlus} from 'react-icons/fa'
import {CiCircleRemove} from 'react-icons/ci'
import { useGlobalContext } from '../context';
export default function Bag() {
    const {cart,total,clearCart} = useGlobalContext();

  return (
    <main>
        <div className="container">
        <h1>Cart Item <span><FaShoppingBasket/></span></h1>
        <div className="cart-item">
            {cart.map(item=>{
                const {id, title,price,img,amount}=item;
                return(
                    <>
                    <section key={id} className="each-item">
                        <img src={img} alt={title} className='product-image'/>
                        <section className="description">
                        <h2>{title}</h2>
                            <section className='add-remove'>
                                <FaMinus/> <hr className='vertical-bar'/>
                                {amount} <hr className='vertical-bar'/>
                                <FaPlus/>
                            </section>
                        </section>
                        <p>$ {price}</p>
                        <section className='remove-section'>
                            <CiCircleRemove/>
                        </section>
                    </section>
                    <hr style={{width:'100%',height:'2px', background:'var(--blue)'}}/>
                    </>
                )
            })}
        </div>
        <section>
            <h1>SubTotal:<span style={{fontWeight:'bold', marginLeft:'2rem'}}>$ {total}</span></h1>
        </section>
        <button className="clear-btn" onClick={clearCart}>Clear All</button>
        </div>
    </main>
  )
}
