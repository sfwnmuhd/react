import RestuarantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = ()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);
    const onlineStatus =useOnlineStatus();

    const[searchText, setSearchText] = useState("");
    
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        
        // Optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);

    };

    // Conditional rendering
    // if(listOfRestaurants == 0){
    //     return <Shimmer/>
    // }
    if(onlineStatus === false){
        return(
            <h1>You are Offline, Check your internet</h1>
        )
    }
    return listOfRestaurants.length == 0 ?(<Shimmer/>) : (
        <div className="body">
            <div className="filter">
                
                <div className="search-bar">
                    <input type="search" placeholder="Search for Restaurants" value={searchText} onChange={(e) =>{
                        setSearchText(e.target.value);
                        
                    }} />
                    <button onClick={()=>{

                        //  filter the restaurant card and update the UI    
                        // need searchText
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurants(filteredRestaurant);
                    }}
                    >
                        Search
                    </button>
                </div>
                
                <button  className="filter-btn" onClick={()=>{
                    // topRestaurantBtn == "Top Rated Restaurant" ? setTopRestaurantBtn("All Restaurants") : setTopRestaurantBtn("Top Rated Restaurant");
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.2
                    )
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <h2>Restaurants</h2>
            <div className="res-container">
                {
                filteredRestaurants.map((restaurants) => (
                <Link
                key ={restaurants.info.id}
                to={"/restaurants/"+restaurants.info.id}
                >
                    <RestuarantCard  resData ={restaurants}/></Link>))
                }      

            </div>

        </div>
    )
}

export default Body;