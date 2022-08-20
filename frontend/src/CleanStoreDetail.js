import SideBar from "./components/SideBar";
import { useState,useEffect,useContext } from "react";
import { useNavigate,useParams } from "react-router";
import { CleanStoreContext } from "./App";
import Vector from './Vector.png' 
import Vector_bottom from './Vector_bottom.png' 

const env=process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const CleanStoreDetail = () => {

    const {id} = useParams();
    const cleanStoreList = useContext(CleanStoreContext);
    const navigate = useNavigate();
    const [data,setData] = useState();

    useEffect(()=>{
        if (cleanStoreList.length >=1){
            const targetList = cleanStoreList.find((it)=>parseInt(it.id)===parseInt(id));

            if(targetList){ //가게가 존재할 때
                setData(targetList);
            } else{ //가게가 없을 때
                alert("없는 가게입니다.");
                navigate("/cleanstore",{replace:true}); //뒤로가기 막음.
            }
        }
    },[id,cleanStoreList]);

    if(!data) {
        return <div className="CleanStoreDetail">로딩중입니다...</div>;
    }else{
    return (
        <div className="CleanStoreDetail">
            <section className="menu_wrapper"><SideBar /></section> 
            <div className="cleanstore_detail">
            <section className="cleanstore_topbar">
                <h2>클린스토어 상세정보</h2></section>
            <section className="cleanstore_content">
            <h2>{data.store_name}</h2>
            <div className="cleanstore_url">
                <button onClick={()=>navigate(`${data.store_url}`)}>
                    <a href={data.store_url} >관련링크 방문하기</a>
                    <img src={Vector} alt="Vector" />
                    {/* <img src={process.env.PUBLIC_URL + `assets/Vector.png`.default}/> */}
                </button>
            </div>
            </section>
            <section className="cleanstore_content2">
            <h3>임시 별점</h3>
            <h4>{data.description.slice(0,25)}</h4>
            <img src={data.store_image} />
            <div className="cleanstore_management">
                <h2>가게 운영 안내</h2>
            </div>
            </section>
            </div>
        </div>
    );
};
};

export default CleanStoreDetail;
