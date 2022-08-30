import './Details.css'
import { PostStateContext } from "./App";
import { useContext, useParams, useEffect, useState, useRef} from 'react';
import { useLocation } from "react-router";


const Details = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className='Details'>
            <div className="Details_header">
                <div className="Details_header_title">B ZERO</div>
                <div className="Details_header_right">
                    <div>가게 찾기</div>
                    <div className='Details_header_right_community'>커뮤니티</div>
                    <div>마이페이지</div>
                </div>
            </div>
            <div className="Details_Body">
                <div className="Details_Body_1">
                    <div className="Details_Body_1_route">커뮤니티 &gt;<div className='Details_Body_1_route_s'> 궁금해요</div></div>
                   
                </div>
                <div className="Details_Body_2">
                    <div className="Details_Body_2_title">{state.title}</div>
                </div>
                <div className="Details_Body_3">
                    <div className="Details_Body_3_user">{state.user}</div>
                    <div className="Details_Body_3_imgs">
                        <img className='Details_Body_3_imgs_imgs1' src={process.env.PUBLIC_URL + `/icon/Good.png`}/>
                        <img className='Details_Body_3_imgs_imgs2' src={process.env.PUBLIC_URL + `/icon/Pin.png`}/>
                    </div>
                </div>
                <div className="Details_Body_4">
                    <div className="Details_Body_4_post">{state.content}</div>
                </div>
                <div className="Details_Body_5">
                    <div className="Details_Body_5_answer">
                        <img className='Details_Body_3_imgs_imgs2' src={process.env.PUBLIC_URL + `/icon/coment.png`}/>
                        댓글
                    </div>
                    <textarea className='Details_Body_5_answers' placeholder='댓글을 남겨보세요.'></textarea>
                </div>
                <div className='Details_Body_6'></div>
            </div>
        </div>
    );
};

export default Details;