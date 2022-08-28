import "../css/Mapnav.css"
import React from "react"
const MypageNav=()=>{


    return(
        <div className="Map_nav" style={{marginRight:'30px'}}>

    <div className="Map_nav_image"><img src={process.env.PUBLIC_URL+`../img/로고 파랑 2.png`}></img> BZero</div>
    
    <div className="Map_nav_sellect">
        <a href="/mypage"><div className="Map_nav_subtext" style={{color:'#0679FF'}}>마이페이지</div></a>
        <div className="Map_nav_subtext" >가게 찾기</div>
        <div className="Map_nav_subsub">
            <div>클린스토어</div>
            <a href="/map"><div>공병스토어</div></a>
        </div>
        <div className="Map_nav_subtext">커뮤니티</div>
        <div className="Map_nav_subtext">제로웨이스트 일기</div>
        
    </div>

    

    </div>
    )
}

export default React.memo(MypageNav)