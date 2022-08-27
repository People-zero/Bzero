import SideBar from "./components/SideBar";
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

const CleanStoreDetail = () => {

    const {id} = useParams();
    const cleanStoreList = useContext(CleanStoreContext);
    const navigate = useNavigate();
    const [data,setData] = useState();
    const [reviewData,setReview] = useState([]); 
    const [review,dispatch] = useReducer(reducer,dummyReview); 

    // useEffect(()=>{
    //     fetch('http://localhost:8000/review/')
    //     .then((res)=>res.json())
    //     .then((reviewData)=>{
    //       setReview(reviewData)
    //     })
    //   })

    useEffect(()=>{
        init();
    },[])
    
    useEffect(()=>{
        if (cleanStoreList.length >=1){
            const targetList = cleanStoreList.find((it)=>parseInt(it.id)===parseInt(id));
                 // const targetReview = cleanStoreReview.find((it)=>parseInt(it.Store_PK)===parseInt(id));
            if(targetList){ //가게가 존재할 때
                setData(targetList);
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
    const [point,setpoint] = useState(5);

    const init = () => {
            axios.get("http://127.0.0.1:8000/review/")
            .then((response) => {
            setReview([...response.data]);
        })

        if (reviewData.lengh>=1){
            const targetReview = reviewData.filter((it)=>parseInt(it.Store_PK)===parseInt(id));
            setReview(targetReview);
        } else{
            const targetReview = dummyReview.filter((it)=>parseInt(it.Store_PK)===parseInt(id));
            setReview(targetReview);
        }
        dispatch({type:"INIT",data:reviewData});
        console.log(reviewData);
    }

    const onCreate = (point,comment) => {
        dispatch({
          type : "CREATE",
          data : {
            id : reviewId.current,
            Store_PK : cleanStoreList.find((it)=>parseInt(it.id)===parseInt(id)).id,
            User_PK : 3,
            point,
            comment, 
            created_at : new Date(strDate).getTime(),
            updated_at : new Date(strDate).getTime(),
          },
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
            <h3 className="cleanstore_star">임시 별점</h3>
            <h4>
                {((data.description).split('.')).slice(0,1)}.
                {/* 한줄만 보여주기 - 간략하게 */}
                </h4>
            <img className="store_image" src={data.store_image} />
            <div className="cleanstore_management">
                <button>
                <img className="vector_image" src={Vector_bottom} alt="Vector_bottom" />
                가게 운영 안내
                </button>
                <div className="cleanstore_information">
                    <section>
                    <h2 className="opening_hours">영업 일자 및 시간<h3>{data.opening_hours}</h3></h2>
                    <h2 className="address">주소<h3>{data.address}</h3></h2>
                    <h2 className="telephone">문의처<h3>{data.telephone}</h3></h2>
                    </section>
                    <img src={Map} alt="Map" /> 
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
                    <h3 className="cleanstore_star">임시 별점</h3>
                    <section className="review">
                        <CleanStoreReview cleanStoreReview = {reviewData} />
                    </section>
                </div>
                <div className="cleanstore_review_write">
                    <h2>리뷰 작성</h2>
                    <h3>이 스토어를 추천하시겠어요?</h3>
                </div>
            </div>
            </section>
            </div>
        </div>
    );
};
};

export default CleanStoreDetail;
