import React, { useContext, useState } from 'react'
import "./index.scss"
import useFetchData from '../../hooks/UseFetchData'
import Grid from "../../../public/svg/apps-grid-icon (1).svg"
import { useNavigate } from 'react-router-dom'
import { searchContext } from '../../context/searchContext'

const Sort = () => {
  const { data, setData } = useFetchData("products");
  const { isFull, setIsFull } = useContext(searchContext)
  const navigate = useNavigate()


  // const selectionSort = (arr, order) => {
  //   const sortedProducts = [...arr];
  //   for (let i = 0; i < sortedProducts.length - 1; i++) {
  //     let minMaxIndex = i;
  //     for (let j = i + 1; j < sortedProducts.length; j++) {
  //       if (order === 'asc'
  //         ? sortedProducts[j].price < sortedProducts[minMaxIndex].price
  //         : sortedProducts[j].price > sortedProducts[minMaxIndex].price) {
  //         minMaxIndex = j;
  //       }
  //     }
  //     if (minMaxIndex !== i) {
  //       [sortedProducts[i], sortedProducts[minMaxIndex]] = [sortedProducts[minMaxIndex], sortedProducts[i]];
  //     }
  //   }
  //   return sortedProducts;
  // };

  // const [sortOrder, setSortOrder] = useState('asc');

  // const handleSortChange = (e) => {
  //   setSortOrder(e.target.value);
  // };

  // const handleSort = () => {
  //   const sorted = selectionSort(data, sortOrder);
  //   setData(sorted);
  // };


  return (
    <div className='sort-main'>
      <span>Showing 1--{data.length} of {data.length} results</span>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img onClick={() => setIsFull(false)} style={{ cursor: "pointer", width: "13px", height: "13px" }} src={Grid} alt="" />
          <i onClick={() => setIsFull(true)} style={{ cursor: "pointer", width: "15px", height: "15px" }} class="fas fa-list-ul"></i>
        </div>
        {/* <select  style={{ border: "none", fontSize: "16px", cursor: "pointer" }}>
          <option value="desc">Sort from Low to High Price</option>
          <option value="asc">Sort from High to low Price</option>
        </select> */}
        {/* <button>Sort</button> */}
      </div>
    </div>
  )
}

export default Sort