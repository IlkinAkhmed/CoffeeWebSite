import React from 'react'
import { useContext } from 'react'
import { searchContext } from '../../context/searchContext'
import "./index.scss"

const Category = () => {

  const {setCategory} = useContext(searchContext)

  function ProductCat(productcategory) {
    setCategory(productcategory)
  }
  return (
    <div className='search-product'>
      <h2>FILTER HERE</h2>
      <button className='showAll' onClick={()=>ProductCat("All")} >Show All</button>
      <div onClick={()=>ProductCat("CREUSET COFFEE")} className='search-svg'>
        <button>CREUSET COFFEE<span>03</span></button>
      </div>
      <div onClick={()=>ProductCat("ROSTED COFFEE")} className='search-svg'>
        <button>ROSTED COFFEE<span>05</span></button>
      </div>
      <div onClick={()=>ProductCat("CAPPUCINO")} className='search-svg'>
        <button>CAPPUCINO<span>04</span></button>
      </div>
    </div>
  )
}

export default Category