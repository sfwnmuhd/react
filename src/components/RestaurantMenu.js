import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>{
    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId);

    
    
    if(resInfo === null){
        return <Shimmer/>
    }
    const categories =  resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card?.card?.itemCards;

    // console.log(categories)
    // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards)

    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[0]?.card?.card?.text}</h1>

            {categories?.map((category) =>(<RestaurantCategory key={category.card.info.id}  data={category.card}/>))}
           
        </div>
    )
}


export default RestaurantMenu;