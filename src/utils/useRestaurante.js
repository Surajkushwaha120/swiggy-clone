import { useState, useEffect } from "react";
import { IMG_CDN_URL, FETCH_MENU_URL } from "../contants";

const useRestaurante = (resId) => {
  const [restaurant, setRestaurant] = useState([null]);

  console.log("res",resId);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);

    const json = await data.json();
    const restaurantMenuList = json["data"]["cards"][0]["card"]["card"]["info"];
    console.log(restaurantMenuList);
    setRestaurant(restaurantMenuList);
  }

  return restaurant;
};

export default useRestaurante;
