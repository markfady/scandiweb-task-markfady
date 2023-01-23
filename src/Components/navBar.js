import React from 'react'
import { useSelector } from 'react-redux'

export default function NavBar() {
  const items=useSelector(state=>state.cart) //read the length of added items in the state of cart
  return (
      <div className='Navbar'>
            <div className='categories'>
                  <ul>
                    <li>All</li>
                    <li>Clothes</li>
                    <li>Tech</li>
                  </ul>
            </div>
        <div className='icons'> 
          <div className='icons-data'>
        <label htmlFor="Currency"></label>
          <select name="Currency" id="Currency">
          <option value="Currency"></option>
          </select>
            <div className='cart-number'>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>{items.length}</p>
    </div>
        </div>
          </div>
          </div>
  )
}
