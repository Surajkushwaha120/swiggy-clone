import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurante from "../utils/useRestaurante";
import {useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice";


const RestaurantMenu = () => {
   
  const  {resId}  =  useParams();


  const  restaurant = useRestaurante(resId );
const dispatch = useDispatch()

  const handelAddItem = (restaurant) => {
    dispatch(addItem(restaurant));

  };


//  const [restaurant, setRestaurant] = useState([null]);

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // async function getRestaurantInfo() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4254236&lng=72.8156715&restaurantId=" + resId
  //   );

  //   const json = await data.json();
  //   const restaurantMenuList = json["data"]["cards"][0]["card"]["card"]["info"];
  //   console.log(restaurantMenuList);
  //   setRestaurant(restaurantMenuList)
  // }
  
 
  
  return !restaurant ?  (
    <Shimmer /> ) : (
    <div>
      <div className="w-96 p-2 m-4 shadow-lg bg-pink-100 rounded-lg">
      <h1 className="font-bold">hii this restaurant id:{resId}</h1>
      <h2 className="font-bold" >{restaurant.name}</h2>
      <img className="rounded-lg" src={IMG_CDN_URL+ restaurant.cloudinaryImageId} />
      <h3>{restaurant.area}</h3>
      <h3 className="font-bold">{restaurant.city}</h3>
      <h3>{restaurant.avgRating} Stars</h3>
      <h3>{restaurant.costForTwoMessage}</h3>
      </div>
<div> 
  <button className="p2 m-5 bg-green-100" onClick={ () => handelAddItem(restaurant)}>AddItem</button>
</div>

      <div> 
        {/* {console.log(restaurant.menu.items)} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
