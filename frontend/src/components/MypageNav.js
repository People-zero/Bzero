import "../css/Mapnav.css"
import React from "react"
import { useNavigate } from "react-router-dom"
const MypageNav=()=>{
   const navigate=useNavigate() 

    return(
        <div className="Map_nav" style={{marginRight:'30px'}}>

<button className="Map_nav_image" style={{cursor:"clicked"}} onClick={()=>{navigate('/main')
    }}><img src={process.env.PUBLIC_URL+`../img/로고 파랑 2.png`}></img> BZero</button>
    
    <div className="Map_nav_sellect">
        <a href="/mypage"><div className="Map_nav_subtext" style={{color:'#0679FF'}}>마이페이지</div></a>
        <div className="Map_nav_subtext" >가게 찾기</div>
        <div className="Map_nav_subsub">
            <a href='#' ><div style={{color:'#979797'}}>클린스토어</div></a>
            <a href="/map"><div style={{color:'#979797'}}>공병스토어</div></a>
        </div>
        <div className="Map_nav_subtext">커뮤니티</div>
        <button onClick={()=>{navigate('/calendar')}} className="Map_nav_subtext">제로웨이스트 일기</button>
        
    </div>

    

    </div>
    )
}

export default React.memo(MypageNav)