import React from 'react'
import './searchbar.css'
function searchbar() {
  return (
    <div class="Card">
    <div class="CardInner">
    <div class="container">
      <div class="Icon">
      </div>
      <div class="InputContainer">
        <input className='search'  placeholder="  🔍  Search"/> 
      </div>
    </div>
   </div>
  </div>
  )
}

export default searchbar