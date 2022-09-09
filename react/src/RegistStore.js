import './RegistStore.css';
import icon_earth from './images/icon1.svg'
import photo_icon from './images/photo_icon.svg'
import mainlogo from './images/logo2.svg'


const RegistStore = ()=>{

  {/*수정중*/}

  return (
    <div className="registstore">
      <div className="registstore_navbar_left">
        <div className='registstore_navbar_left_title'>
          <p><img src={mainlogo} width='130px'/></p>
        </div>
        <div className='registstore_navbar_left_menu'>
          <a href="#">마이페이지</a>
          <a href="#">가게 찾기</a>
          <a href="#" className='registstore_present'>가게 등록</a>
          <a href="#">커뮤니티</a>
          <a href="#">제로웨이스트 일기</a>
        </div>
        <div className='registstore_navbar_left_logout'>
          <a href='#'>로그아웃</a>
        </div>
      </div>
      <div className='registstore_right'>
        <div className='registstore_navbar_top'>
          <div className='registstore_text'>
            <div className='registstore_line1'>
              <p className='registstore_title1'>스토어 등록</p>
              <p className='registstore_title2'>클린 스토어</p>
            </div>
            <p>아래 내용들을 입력해서 스토어를 등록해보세요</p>
          </div>
          <div className='registstore_logo'>
            <img src={icon_earth} width='70px'/>
          </div>
        </div>
        <div className='registstore_main'>
          <div className='registstore_boxes'>
            <div className='registstore_box_question'>
              <div className='registstore_box'>
                <div className='registstore_Q'>가게 이름을 작성해주세요</div>
                <textarea className='registstore_A' placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registstore_box'>
                <div className='registstore_Q'>가게 정보를 작성해주세요</div>
                <textarea className='registstore_A' placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registstore_box'>
                <div className='registstore_Q'>어떤 가게인지 자세한 설명을 작성해주세요</div>
                <textarea className='registstore_A' placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registstore_box'>
                <div className='registstore_Q'>가게 주소를 작성해주세요</div>
                <textarea className='registstore_A' placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registstore_box'>
                <div className='registstore_Q'>가게 연락처를 작성해주세요</div>
                <textarea className='registstore_A' placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registstore_box'>
                <div className='registstore_Q'>관련 링크가 있다면 첨부해주세요</div>
                <textarea className='registstore_A' placeholder='내용을 입력해주세요'/>
              </div>
            </div>
            <div className='registstore_box_img'>
                <div className='registstore_order'>사진을 첨부해주세요</div>
                <div className='registstore_input_img'>
                  <label for="input_file" className="RegistStore_input_file">
                  <img src={photo_icon} />
                  {/*사진미리보기 기능추가*/}
                  </label>
                <input type="file" id="input_file" accept="image/*" style={{display:"none"}} required multiple/>
                </div>
            </div>
          </div>
          <div className='registstore_main_bottom'>
            <a className='registstore_back' href='#'>← 작성 취소</a>
            <a className='registstore_save' href='#'>작성하기</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistStore;