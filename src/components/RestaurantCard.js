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
        <div className="m-4 p-4 w-[250px] border hover:bg-gray-400 hover:text-white h-[550px]" >
            <img className="rounded-lg" src={CDN_URL + resData.info.cloudinaryImageId} ></img>
            <h3 className="font-bold py-4 text-lg" >{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.slaString} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestuarantCard;