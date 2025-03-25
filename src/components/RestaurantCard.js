import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props)=>{
    const{ resData} = props;
    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo
    } = resData?.info;
    return(
        <div className="m-4 p-4 w-[250px]  hover:bg-gray-400 hover:text-white " >
            <img className="rounded-lg h-60 w-90" src={CDN_URL + resData.info.cloudinaryImageId} ></img>
            <h3 className="font-bold py-2 text-lg" >{name}</h3>
            <div className="flex font-medium">
                <h4>⭐{avgRating}</h4>
                <h4 className="pl-3">{sla?.slaString}</h4>
            </div>
            <h4 className="text-[15px] text-gray-400">{cuisines.join(", ")}</h4>
            
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestuarantCard;