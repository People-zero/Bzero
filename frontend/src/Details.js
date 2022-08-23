import './Details.css'

const Details = () => {
    return (
        <div className='Details'>
            <div className="Details_header">
                <div className="Details_header_title">B ZERO</div>
                <div className="Details_header_right">
                    <div>가게 찾기</div>
                    <div>커뮤니티</div>
                    <div>마이페이지</div>
                </div>
            </div>
            <div className="Details_Body">
                <div className="Details_Body_1">
                    <div className="Details_Body_1_route">커뮤니티 &gt;<div className='Details_Body_1_route_s'> 궁금해요</div></div>
                   
                </div>
                <div className="Details_Body_2">
                    <div className="Details_Body_2_title">{}(제목이 들어갈 자리)</div>
                </div>
                <div className="Details_Body_3">
                    <div className="Details_Body_3_user">(글쓴이의 자리)</div>
                </div>
                <div className="Post_Body_4">
                    <div className="Details_Body_4_post">post 자리</div>
                </div>
                <div className="Details_Body_5">
                    <div className="Details_Body_5_answer">댓글</div>
                </div>
            </div>
        </div>
    );
};

export default Details;