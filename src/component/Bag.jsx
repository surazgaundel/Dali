import React, { useState } from 'react'
import {FaShoppingBasket,FaMinus,FaPlus} from 'react-icons/fa'
import {CiCircleRemove} from 'react-icons/ci'
import { useGlobalContext } from '../context';
export default function Bag() {
    const {cart,total,clearCart,removeItem,increaseItem,decreaseItem} = useGlobalContext();

    if(cart.length==0){
        return(<div className="empty-cart">Your cart is currently empty.</div>)
    }

  return (
    <main>
        <div className="container">
        <h1>Cart Item <span><FaShoppingBasket/></span></h1>
        <div className="cart-item">
            {cart.map(item=>{
                const {id, title,price,img,amount}=item;
                return(
                    <div key={id}>
                    <section className="each-item">
                        <img src={img} alt={title} className='product-image'/>
                        <section className="description">
                        <h2>{title}</h2>
                            <section className='add-remove'>
                                <FaMinus onClick={()=>decreaseItem(id)}/> <hr className='vertical-bar'/>
                                {amount} <hr className='vertical-bar'/>
                                <FaPlus onClick={()=>increaseItem(id)}/>
                            </section>
                        </section>
                        <p>$ {(price*amount).toFixed(2)}</p>
                        <section className='remove-section'>
                            <CiCircleRemove onClick={()=>removeItem(id)}/>
                        </section>
                    </section>
                    <hr style={{width:'100%',height:'2px', background:'var(--blue)'}}/>
                    </div>
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
