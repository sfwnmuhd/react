import RestuarantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        
        // Optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        

    };

    // Conditional rendering
    // if(listOfRestaurants == 0){
    //     return <Shimmer/>
    // }

    return listOfRestaurants.length == 0 ?(<Shimmer/>) : (
        <div className="body">
            <div className="filter">
                {/* <input type="search" placeholder="Search for Restaurants" className="search-bar"/>
                <button onClick={()=>{
                    const SearchInput = listOfRestaurants.filter(
                        (res) => res.info.name === document.querySelector(".search-bar").value

                    )
                    setListOfRestaurants(SearchInput);

                    // setListOfRestaurants(SearchInput);
                }}>Search</button> */}
                <div className="search-bar">
                    <input type="search" placeholder="Search for Restaurants"  />
                    <button onClick={()=>{

                    }}>Search</button>
                </div>
                <button  className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <h2>Restaurants</h2>
            <div className="res-container">
                {
                listOfRestaurants.map((restaurants) => (<RestuarantCard key ={restaurants.info.id} resData ={restaurants}/>))
                }      

            </div>

        </div>
    )
}

export default Body;