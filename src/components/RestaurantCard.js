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
        <div className="res-card" >
            <img className="res-logo" src={CDN_URL + resData.info.cloudinaryImageId} ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.slaString} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestuarantCard;