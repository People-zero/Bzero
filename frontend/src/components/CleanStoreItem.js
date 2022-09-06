import { useNavigate } from "react-router";

const CleanStoreItem = ({id,store_name,opening_time,store_longitude,store_latitude,telephone,description,address,store_image,point_avg,store_url})=>{
    const navigate = useNavigate();
    const goDetail =()=>{
        navigate(`/store/clean_store/${id}`);
    };

    return(
        <div className="CleanStoreItem">
            <div onClick = {goDetail} className={["img_wrapper",`img_wrapper_${id}`].join(" ")}>  {/* background 적용하기 위해 배열로 묶음 */}
            <img src={process.env.PUBLIC_URL + `assets/dummy_photo/photo_${id}.png`}/> </div>
            <div onClick = {goDetail} className="info_wrapper">
            <div className="store_name">{store_name}</div>
            <div className="store_content">{description.slice(0,25)}</div>
        </div>
        </div>
    );
};

export default CleanStoreItem;

