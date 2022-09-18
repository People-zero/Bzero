import MapNav from "./components/MapNav";
import { useState,useEffect,useContext,useReducer,useRef } from "react";
import { useNavigate,useParams } from "react-router";
import { CleanStoreContext } from "./App";
// import { CleanStoreReview } from "./App";
import axios from "axios";
import CleanStoreReview from "./components/CleanStoreReview";
import Vector from './Vector.png' 
import Vector_bottom from './Vector_bottom.png' 
import Map from './Map.png'
import { dummyReview } from "./util/dummyReview";
import blue_star from './blue_star.png'
import gray_star from './gray_star.png'
import Point from "./components/Point";
import CleanNav from "./components/cleanNav";

const env=process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const reducer = (state,action)=>{
    let newState = [];
    switch(action.type){
      case 'INIT' : {
        return action.data;
      }
      case 'CREATE': {
        newState = [action.data, ...state];
        break;
      }
      default: return state;
    }
    return newState;
  };

const CleanStoreDetail = ({userdata}) => {
    const { kakao } = window;
    const {id} = useParams();
    const cleanStoreList = useContext(CleanStoreContext);
    const navigate = useNavigate();
    const [data,setData] = useState();
    const [reviewData,setReview] = useState([]); 
    const [review,dispatch] = useReducer(reducer,dummyReview); 
    const [pointAvg,setPointAvg] = useState(); //평균 별점
    const [reviewPointAvg,setReviewPointAvg] = useState(5);

    useEffect(()=>{
    init()
    },[])

    useEffect(()=>{
        if (cleanStoreList.length >=1){
            const targetList = cleanStoreList.find((it)=>parseInt(it.id)===parseInt(id));
            // const targetReview = cleanStoreReview.find((it)=>parseInt(it.Store_PK)===parseInt(id));
            if(targetList){ //가게가 존재할 때
                setData(targetList);
                setPointAvg((targetList.point_avg)*20);
            } else{ //가게가 없을 때
                alert("없는 가게입니다.");
                navigate("/cleanstore",{replace:true}); //뒤로가기 막음.
            }

            // if (targetReview){
            //     setReview(targetReview);
            // }
        
       
}
    },[id,cleanStoreList]);

    const reviewId = useRef(6);
    const date = new Date();
    const strDate = new Date(parseInt(date)).toLocaleDateString();

    const commentRef=useRef(); //content를 다 작성 안했을 때 focus하기 위함.
    const [comment,setComment] = useState("");
    const [point,setpoint] = useState(0);


    const getPoint= (point) =>{ 
        setpoint(point);
    } 


    const init = async() => {
        await axios.get(`https://bzeroo.herokuapp.com/https://bzero.tk/store/clean_store/${id}/reviews/`)
        .then((response)=>{
            let data=response.data
          
            const initdata = data.map((it)=>{
              return{
                id : it.id,
                updated_at_review : it.updated_at_review,
                comment : it.comment,
                point : it.point,
                created_at_review: it.created_at_review,
                store_review : it.store_review,
                user_review : it.user_review,
                user_review_name: it.user_review_name,
              }
            })
            setReview(initdata);
        }).catch(err=>console.log("??",err))
        // if (reviewData.lengh>=1){
        //     const targetReview = reviewData.filter((it)=>parseInt(it.store_review)===parseInt(id));
        //     setReview(targetReview);
        // } else{
        //     const targetReview = dummyReview.filter((it)=>parseInt(it.store_review)===parseInt(id));
        //     setReview(targetReview);
        // }
        // dispatch({type:"INIT",data:reviewData});
        // console.log(reviewData);
    }
    

    const onCreate = async(point,comment)=>{
        dispatch({
          type : "CREATE",
          data : {
            id : reviewId.current,
            store_review : cleanStoreList.find((it)=>parseInt(it.id)===parseInt(id)).id,
            user_review : userdata[0]?.id,
            point,
            comment, 
            created_at_review : new Date(strDate).getTime(),
            updated_at_review : new Date(strDate).getTime(),
          },
        });
       
        let token = localStorage.getItem("token");
        await axios.post(`https://bzeroo.herokuapp.com/https://bzero.tk/store/clean_store/${data.id}/reviews/`, {
            store_review : data.id,
            user_review : userdata[0]?.id,
            point : point,
            comment: comment,
          }, {
              headers:{
                Authorization: "Token ".concat(token),
              }  
        })
            .then(function (response) {
              
              init()
            })
            .catch(function (error,response) {
              console.log(error);
              console.log(response);
            });
            
        reviewId.current += 1;
      };
    
      const handleSubmit = () => { //리뷰 작성
        if(comment.length <1) {
            commentRef.current.focus();
            return;
        }
        onCreate(point,comment);
    };
    
    // useEffect(()=>{

    //     console.log(data)
    //     var mapContainer = document.getElementById('bottle_map'), // 지도를 표시할 div 
    //     mapOption = { 
    //         center: new kakao.maps.LatLng(data?.store_longtitude, data?.store_latitude), // 지도의 중심좌표
    //         level: 3 // 지도의 확대 레벨
    //     };
    
    // var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    // 마커가 표시될 위치입니다 
    // var markerPosition  = new kakao.maps.LatLng(data?.store_longtitude, data?.store_latitude); 
    
    // // 마커를 생성합니다
    // var marker = new kakao.maps.Marker({
    //     position: markerPosition
    // });
    // function setZoomable(zoomable) {
    //   // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
    //   map.setZoomable(zoomable);    
    // }
    // // 마커가 지도 위에 표시되도록 설정합니다
    // marker.setMap(map);
      

    if(!data) {
        return <div className="CleanStoreDetail">로딩중입니다...</div>;
    }else{
    return (
        <div className="CleanStoreDetail">
            <CleanNav />
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
            <div className="stars">
            <div className="starBox" style={{width : pointAvg}} >
                <img className="pointOfStar" src={blue_star} alt="blue_star" />
            </div>
            <img className="backgroundStar" src={gray_star} alt="gray_star" />
            </div>
            <h4>
                {((data.description).split('.')).slice(0,1)}.
                {/* 한줄만 보여주기 - 간략하게 */}
                </h4>
            <img className="store_image" src={data.store_image?(data.store_image):(process.env.PUBLIC_URL + "/assets/dummy_photo/photo_3.png")} />
            <div className="cleanstore_management">
                <button>
                <img className="vector_image" src={Vector_bottom} alt="Vector_bottom" />
                가게 운영 안내
                </button>
                <div className="cleanstore_information">
                    <section>
                    <h2 className="opening_hours">영업 일자 및 시간<h3>{data.opening_time}</h3></h2>
                    <h2 className="address">주소<h3>{data.address}</h3></h2>
                    <h2 className="telephone">문의처<h3>{data.telephone}</h3></h2>
                    </section>
                    <div className="bottlestore_map" id='bottle_map'></div> 
                </div>
                <div className="cleanstore_description">
                    <h2>가게에 대한 설명</h2>
                    <h3>{data.description}</h3>
                </div>
                <div className="cleanstore_review">
                    <button>
                    <img className="vector_image" src={Vector_bottom} alt="Vector_bottom" />
                    리뷰
                    </button>
                    <div className="stars">
                 <div className="starBox" style={{width : pointAvg}} >
                 <img className="pointOfStar" src={blue_star} alt="blue_star" />
                 </div>
                 <img className="backgroundStar" src={gray_star} alt="gray_star" />
                 </div>
                    <section className="review">
                        <CleanStoreReview cleanStoreReview = {reviewData} />
                    </section>
                </div>
                <div className="cleanstore_review_write">
                    <h2>리뷰 작성</h2>
                    <h3>이 스토어를 추천하시겠어요?</h3>
                    <div className="star">
                        <Point pointAvg value={point} getPoint={getPoint}/>
                        <h2>{point}/5</h2>
                    </div>
                    <textarea placeholder="리뷰를 작성해주세요." ref={commentRef} value={comment} onChange={(e)=>setComment(e.target.value)} />
                </div>
                <button className="write_button" onClick={handleSubmit}>
                    <h2>작성하기</h2>
                </button>
                <div className="relative_url">
                    <section>
                        <img src={Vector_bottom} alt="Vector_bottom" />
                        <h2>관련 링크</h2>
                    </section>
                    <button className="relative_button" onClick={()=>navigate(`${data.store_url}`)}>
                    <a href={data.store_url} > <h2>관련링크 방문하기 {data.store_name}</h2> </a>
                    <img src={Vector} alt="Vector" />
                    {/* <img src={process.env.PUBLIC_URL + `assets/Vector.png`.default}/> */}
                    </button>
                </div>
            </div>
            </section>
            </div>
        </div>
    );
};
};

export default CleanStoreDetail;
