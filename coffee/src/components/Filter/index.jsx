import React from 'react'
import "./index.scss"
import Search from '../Search'
import Category from '../Category'
import Price from '../Price'

const Filter = () => {
  return (
    <div className='filter-main'>
      <Search />
      <Category />
      <Price />
    </div>
  )
}

export default Filter