import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () =>{
    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId);

    
    
    if(resInfo === null){
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