
const RestraurantCategory = ({data})=>{
    console.log(data)
    return(
        <div>
            {/* header */}
            <div className="">
                <span>{data?.info?.name}</span>
            </div>
        </div>
    )
}

export default RestraurantCategory;