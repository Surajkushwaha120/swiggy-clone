import React, { useContext, useEffect, useState } from "react";
import RestauranteCard from "./RestauranteCard";
import Shimmer from "./Shimmer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { user, setUser } = useContext(UserContext);

  console.log(setAllRestaurants);

  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9766637&lng=77.5712556&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data?.json();
    // const datalist = json["data"]["cards"];
    const restaurantslist =
      json["data"]["cards"][2]["card"]["card"]["gridElements"]["infoWithStyle"][
        "restaurants"
      ];
    console.log("hiii", json);
    console.log("List",restaurantslist);
    setAllRestaurants(restaurantslist);
    setfilteredRestaurants(restaurantslist);
  }
  // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

  // Condation Rendering
  //if restaurant is empty => shimmuer UI
  // if restaurant has data => actual data UI

  // Not render Component (Early return)

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 offline, Please Check your Internate Connection</h1>;
  }

  if (!allRestaurants) return null;

  // if(filteredRestaurants?. length === 0)
  // return <h1>No Restaurent Match Found ?</h1>

  console.log("render");

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-container p-5 bg-pink-100 my-5">
        <input
          type="text"
          className="focus:bg-green-50 p-1 m-1"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn p-2 m-2 bg-purple-400 hover:bg-sky-700 text-white rounded-xl"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>

        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-wrap align-center justify-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            // console.log(restaurant.info.name)
            <Link
              className="link-text"
              to={"/restaurant/" + restaurant.info.id}
            >
              {/* <RestauranteCard {...restaurant.info} key={restaurant.info.id} /> */}
              <RestauranteCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
