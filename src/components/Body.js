import RestuarantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = ()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);
    const[topRestaurantBtn, setTopRestaurantBtn] = useState("Top Rated Restaurants");
    const[restaurants, setRestaurants]= useState([])
    
    
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
            <div className="flex cursor-pointer">
                
                <div className="search-bar p-4 m-4 ">
                    <input className="border border-solid border-black cursor-pointer" type="search" placeholder="Search for Restaurants" value={searchText} onChange={(e) =>{
                        setSearchText(e.target.value);
                        
                    }} />
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg cursor-pointer hover:bg-sky-700 hover:text-white" onClick={()=>{

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
                <div className="p-4 m-4 flex items-center cursor-pointer">
                    <button  className="filter-btn px-4  bg-gray-200 m-4 hover:bg-sky-700 cursor-pointer hover:text-white" onClick={()=>{
                        // topRestaurantBtn == "Top Rated Restaurants" ? setTopRestaurantBtn("All Restaurants") : setTopRestaurantBtn("Top Rated Restaurants");
                        // const filteredList = listOfRestaurants.filter(
                        //     (res) => res.info.avgRating > 4.2
                        // )
                        // setFilteredRestaurants(filteredList);

                        // if (topRestaurantBtn === "Top Rated Restaurants") {
                        //     setTopRestaurantBtn("All Restaurants");
                        //     const filteredList = listOfRestaurants.filter(
                        //         (res) => res.info.avgRating > 4.2
                        //     );
                        //     setFilteredRestaurants(filteredList);
                        // } else {
                        //     setTopRestaurantBtn("Top Rated Restaurants");
                        //     setFilteredRestaurants(listOfRestaurants); // Reset to all restaurants
                        // }

                        setTopRestaurantBtn(topRestaurantBtn==="Top Rated Restaurants" ? "All Restaurants" :"Top Rated Restaurants");
                        setFilteredRestaurants(
                            topRestaurantBtn === "Top Rated Restaurants" ? listOfRestaurants.filter(res=>res.info.avgRating > 4.5) : listOfRestaurants
                        )
                        
                        
                    }}>{topRestaurantBtn}</button>
                </div>
            </div>
            <h2 className="m-4 font-bold text-xl flex items-center justify-center ">Restaurants</h2>
            <div className="res-container flex flex-wrap rounded-lg items-center justify-center">
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