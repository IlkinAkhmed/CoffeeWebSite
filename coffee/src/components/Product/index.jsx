import React, { useContext } from 'react'
import "./index.scss"
import ProductCard from '../ProductCard'
import useFetchData from '../../hooks/UseFetchData';
import { searchContext } from '../../context/searchContext';

const Product = () => {
  const {inputValue,category,sliderValue} = useContext(searchContext)
  const { data, isLoading, error } = useFetchData("products");
  console.log(data);
  return (
    <div className='products-main-container'>
        {
          data && data
          .filter(x=>{return x.discountPrice < parseInt(sliderValue,10)})
          .filter((x)=>x.category===category || category==='All')
          .filter((x)=>x.name.trim().toLowerCase().includes(inputValue.trim().toLowerCase()))
          .map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })
        }
    </div>
  )
}

export default Product