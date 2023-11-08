import React, { useContext } from 'react'
import {IMG_CDN_URL } from '../contants';
import UserContext from '../utils/UserContext';


const RestauranteCard = ({name,cloudinaryImageId,cuisines,avgRating,locality
}) => {

  const {user} = useContext(UserContext)
    return (    
      <div className="w-56 p-2 m-4 shadow-lg bg-pink-100 rounded-lg"> 
        <img src={IMG_CDN_URL + cloudinaryImageId} className='rounded-lg' />
        <h2 className='font-bold text-2xl'>{name}</h2>
        <h3 maxlength="20"> {cuisines.join(" , ")}</h3>
        <h4>Rating {avgRating}*</h4>
        <h4>{user.name}</h4>
      </div> 
    );
  }
  
export default RestauranteCard      