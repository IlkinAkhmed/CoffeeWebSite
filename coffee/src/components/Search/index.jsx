import React, { useContext, useState } from 'react'
import { searchContext } from '../../context/searchContext'
import "./index.scss"

const Search = () => {
  const {setInputValue} = useContext(searchContext) 
  return (
    <div className='search-product'>
      <h2>SEARCH HERE</h2>
      <div className='search-svg'>
        <input onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder='Search Product' />
        <i class="fa-solid fa-magnifying-glass" style={{color: "#949494"}}></i>
      </div>
    </div>
  )
}

export default Search