import "./css/Community.css"
import { PostStateContext } from "./App";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState, useRef} from 'react';
import EmotionItem from "./EmotionItem"

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || ""; 

const emotionList = [
    {
        emotion_id : 1,
        emotion_img : process.env.PUBLIC_URL + `/icon/all.png`,
        emotion_descript: '전체'
    },
    {
        emotion_id : 2,
        emotion_img : process.env.PUBLIC_URL + `/icon/together.png`,
        emotion_descript:'함께해요'
    },
    {
        emotion_id : 3,
        emotion_img : process.env.PUBLIC_URL + `/icon/think.png`,
        emotion_descript:'궁금해요'
    },
    {
        emotion_id : 4,
        emotion_img : process.env.PUBLIC_URL + `/icon/photo.png`,
        emotion_descript:'인증사진'
    },
    {
        emotion_id : 5,
        emotion_img : process.env.PUBLIC_URL + `/icon/imformation.png`,
        emotion_descript:'정보광장'
    },
];

const sortOptionList = [
    {value:"latest",name:"최신순"},
    {value:"oldest",name:"오래된순"},
];

const ControlMenu = ({value,onChange,optionList}) =>{
    return (
        <select className="Community_ControlMenu"
        value={value}
        onChange={(e)=>onChange(e.target.value)}>
            {optionList.map((it,idx)=> <option key={idx} 
            value={it.value}>{it.name}
            </option>)}
        </select>
    )
}


const Community = () => {

    const [emotion, setEmotion] = useState(3);

    const handleClickEmote = (emotion) => {
        setEmotion(emotion);
    };


    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const PostList = useContext(PostStateContext);

    const [data, setData] = useState([]);
    const [curDate, setCurDate]  = useState(new Date());

    useEffect(()=>{
        setData(PostList);
    },[PostList, curDate])

    const getProcessedPostList = () => {

        const compare = (a,b)=> {
            if(sortType==="latest") {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }

        }
        const copyList = JSON.parse(JSON.stringify(data));
        const sortedList = copyList.sort(compare);
        return sortedList;
    }

    return (
        <div className="Community">
            <div className="Community_header">
                <div className="Community_header_title">B ZERO</div>
                <div className="Community_header_right">
                    <div>가게 찾기</div>
                    <div>커뮤니티</div>
                    <div>마이페이지</div>
                </div>
            </div>
            <div className="Community_body">
                <div className="Community_body_one">
                    <div className="Community_body_one_title">커뮤니티</div>
                    <div className="Community_body_one_post"><button onClick={()=>navigate('/post')}>글쓰기</button></div>
                </div>
                <div className="Community_body_two">
                    <div className='Community_body_two_doing'>저 이거 했어요!</div>
                    <div className='Community_body_two_share'>꿀팁 공유</div>
                </div>
                <div className="Community_body_three">
                    <div className='Community_body_three_mir'>
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
                        <input className='Community_body_three_serch' type="text" placeholder='검색어를 입력하세요.'></input>
                    </div>
                </div>
                <div className="Community_body_four">
                    <div className='Community_body_four_btns'>
                        {emotionList.map((it)=>(
                            <EmotionItem 
                            key={it.emotion_id} 
                            {...it} 
                            onClick={handleClickEmote} 
                            isSelected={it.emotion_id === emotion}
                            />
                        ))}
                    </div>
                    <div className='Community_body_four_right'>
                        <div className='Community_body_four_right_option'>
                            <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
                        </div>
                        <div className='Community_body_four_postlist'>
                                {getProcessedPostList().map((it)=>(
                                    <div className='Community_body_four_postlist_s' key={it.id}>
                                        <div className='Community_body_four_postlist_s_content'>{it.content}</div>
                                        <div className='Community_body_four_postlist_imgs'>
                                                <img src={process.env.PUBLIC_URL + `/icon/Good.png`}/>
                                                <img src={process.env.PUBLIC_URL + `/icon/Pin.png`}/>
                                                <span>{it.date}</span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;