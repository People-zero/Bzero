import { useNavigate } from "react-router";

const CleanStoreItem = ({id, name, store_img, store_hours, address, phone_number, content})=>{
    const navigate = useNavigate();
    const goDetail =()=>{
        navigate(`/cleanstore/${id}`);
    };

    return(
        <div className="CleanStoreItem">
            <div onClick = {goDetail} className={["img_wrapper",`img_wrapper_${id}`].join(" ")}>  {/* background 적용하기 위해 배열로 묶음 */}
            <img src={process.env.PUBLIC_URL + `assets/dummy_photo/photo_${id}.png`}/> </div>
            <div onClick = {goDetail} className="info_wrapper">
            <div className="store_name">{name}</div>
            <div className="store_content">{content.slice(0,25)}</div>
        </div>
        </div>
    );
};

export default CleanStoreItem;

