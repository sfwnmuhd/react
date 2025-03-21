import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);

    const {resId} =useParams();
    


    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API + resId);

        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }
    if(resInfo == null){
        return <Shimmer/>
    }
    
   
    

    
    return  (
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card?.card?.text}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}


export default RestaurantMenu;