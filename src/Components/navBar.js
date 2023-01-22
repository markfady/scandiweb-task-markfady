import React from 'react'

export default function NavBar() {
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
          <i className="fa fa-spinner fa-spin"></i>
        </div>
          </div>
          </div>
  )
}
