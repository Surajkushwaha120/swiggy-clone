import React from 'react'
import {IMG_CDN_URL } from '../contants';

const FoodItems = (props) => {
console.log(props);
    
  return (
    <div className="w-60 p-2 m-4 shadow-lg bg-pink-100 rounded-lg"> 
        <img src={IMG_CDN_URL + props.cloudinaryImageId} className='rounded-lg' />
        <h2 className='font-bold text-2xl'>{props.name}</h2>
       <h3>{props.costForTwoMessage}</h3>
       <h3>{props.avgRating} Stars</h3>

      </div> 
  )
}

export default FoodItems