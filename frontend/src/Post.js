 import {useState, useRef, useContext} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { PostStateContext, PostDispatchContext } from "./App";
import './Post.css';

const sortOptionList = [
    {value:"카테고리",name:"카테고리"},
    {value:"함께해요",name:"함께해요"},
    {value:"궁금해요",name:"궁금해요"},
    {value:"인증사진",name:"인증사진"},
    {value:"정보광장",name:"정보광장"}
]


const ControlMenu = ({value,onChange,optionList}) =>{
    return (
        <select className="Post_ControlMenu"
        value={value}
        onChange={(e)=>onChange(e.target.value)}>
            {optionList.map((it,idx)=> <option key={idx} 
            value={it.value}>{it.name}
            </option>)}
        </select>
    )
}

const Post = () => {
    const {onCreate} = useContext(PostDispatchContext);
    const navigate = useNavigate();


    const titlRef = useRef();
    const postRef = useRef();
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");

    const [curDate, setCurDate] = useState(new Date());
    const nowday = `${curDate.getFullYear()}.${curDate.getMonth()+1}.${curDate.getDate()}`
    const [sortType, setSortType] = useState("카테고리");
    const {id} = useParams(); 
    const [date, setDate] = useState();

    const handleSubmit = () => {
        onCreate(date, title , post);
        navigate("/community", {replace:true});
    }
    return (
        <div className="Post">
            <div className="Post_header">
                <div className="Post_header_title">B ZERO</div>
                <div className="Post_header_right">
                    <div>가게 찾기</div>
                    <div>커뮤니티</div>
                    <div>마이페이지</div>
                </div>
            </div>
            <div className="Post_body">
                <div className="Post_body_1">
                    <div className="Post_body_1_title">
                        카테고리 <ControlMenu className='Post_body_1_title_catagory' value={sortType} onChange={setSortType} optionList={sortOptionList} />
                    </div>
                    <div className="Post_body_1_nowday">
                        {nowday}
                    </div>
                </div>
                <div className="Post_body_2">
                    <input className='Post_body_2_title' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='제목을 입력해주세요.'></input>
                    <textarea className='Post_body_2_post' value={post} onChange={(e)=>setPost(e.target.value)} placeholder='내용을 입력해주세요.'></textarea>
                    <div className='Post_body_2_img'><div className='Post_body_2_imgs'>이미지 첨부</div></div>
                </div>
                <div className="Post_body_3">
                    <div className='Post_body_3_exit'><div className='Post_body_3_exit_point'>{"<  "}</div><button onClick={()=> navigate(-1)}>나가기</button></div>
                    <div className='Post_body_3_create'><button onClick={()=>{handleSubmit()}}>작성하기</button></div>
                </div>
            </div>
        </div>
    );
};
export default Post;