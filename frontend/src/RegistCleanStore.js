import './RegistCleanStore.css';
import { useState,useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import icon_earth from './images/icon1.svg'
import photo_icon from './images/photo_icon.svg'
import mainlogo from './images/logo2.svg'

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const RegistCleanStore = ({store})=>{

  //const contentRef = useRef();
  //const navigate = useNavigate();

  const [state, setState] = useState({
    ...{store},
  });

  const handleChangeState = (e)=> {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
        ...state,
        [e.target.name] : e.target.value,
    })
};

//파일 미리볼 url을 저장해줄 state
const [fileImage, setFileImage] = useState("");

// 파일 저장
const saveFileImage = (e) => {
  setFileImage(URL.createObjectURL(e.target.files[0]));
  
};

const Component=()=>{
  if(true){
    return (<p><label><input type="checkbox" name="hobby" value="2"/>화</label>
    <label><input type="checkbox" name="hobby" value="3"/>수</label>
    <label><input type="checkbox" name="hobby" value="4"/>목</label>
    <label><input type="checkbox" name="hobby" value="5"/>금</label>
    <label><input type="checkbox" name="hobby" value="6"/>토</label>
    <label><input type="checkbox" name="hobby" value="7"/>일</label></p>);
  }else {
    return;
  }
}

const setThumbnail = (e)=> {
  var reader = new FileReader();

  reader.onload = function(e) {
    var img = document.createElement("img");
    img.setAttribute("src", e.target.result);
    document.querySelector("div#image_container").appendChild(img);
  };

  reader.readAsDataURL(e.target.files[0]);
}

const handleSubmit = () => {
  //저장하기
}

  return (
    <div className="registcleanstore">
      <div className="registcleanstore_navbar_left">
        <div className='registcleanstore_navbar_left_title'>
          <p><img src={mainlogo} width='130px'/></p>
        </div>
        <div className='registcleanstore_navbar_left_menu'>
          <a href="#">마이페이지</a>
          <a href="#">가게 찾기</a>
          <a href="#" className='registcleanstore_present'>가게 등록</a>
          <a href="#">커뮤니티</a>
          <a href="#">제로웨이스트 일기</a>
        </div>
        <div className='registcleanstore_navbar_left_logout'>
          <a href='#'>로그아웃</a>
        </div>
      </div>
      <div className='registcleanstore_right'>
        <div className='registcleanstore_navbar_top'>
          <div className='registcleanstore_text'>
            <div className='registcleanstore_line1'>
              <p className='registcleanstore_title1'>스토어 등록</p>
              <p className='registcleanstore_title2'>클린 스토어</p>
            </div>
            <p>아래 내용들을 입력해서 스토어를 등록해보세요</p>
          </div>
          <div className='registcleanstore_logo'>
            <img src={icon_earth} width='70px'/>
          </div>
        </div>
        <div className='registcleanstore_main'>
          <div className='registcleanstore_boxes'>
            <div className='registcleanstore_box_question'>
              <div className='registcleanstore_box'>
                <div className='registcleanstore_Q'>가게 이름을 작성해주세요</div>
                <textarea 
                name='name'
                value={state.name}
                className='registcleanstore_A' 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registcleanstore_box'>
                <div className='registcleanstore_Q'>가게 정보를 작성해주세요</div>
                <textarea 
                name='info_summamary'
                className='registcleanstore_A'
                value = {state.info_summary} 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registcleanstore_box'>
                <div className='registcleanstore_Q'>영업 정보를 작성해주세요</div>
                {/*<div
                name='info_summamary'
                className='registcleanstore_A'
                value = {state.info_summary} 
                onChange = {handleChangeState}>
                <p><label><input type="checkbox"  value="1"/>...</label>
                <input type="time"/> ~ <input type="time"/></p>
                </div>*/}
                <textarea 
                name='info_summamary'
                className='registcleanstore_A'
                value = {state.info_summary} 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
                

              </div>
              <div className='registcleanstore_box'>
                <div className='registcleanstore_Q'>어떤 가게인지 자세한 설명을 작성해주세요</div>
                <textarea className='registcleanstore_A' 
                name='info'
                value = {state.info} 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registcleanstore_box'>
                <div className='registcleanstore_Q'>가게 주소를 작성해주세요</div>
                <textarea 
                name='address'
                className='registcleanstore_A'
                value = {state.address} 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registcleanstore_box'>
                <div className='registcleanstore_Q'>가게 연락처를 작성해주세요</div>
                <textarea type="tel"
                className='registcleanstore_A' 
                name='number'
                value = {state.number} 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registcleanstore_box'>
                <div className='registcleanstore_Q'>관련 링크가 있다면 첨부해주세요</div>
                <textarea type="url"
                name='streo_url'
                value={state.store_url}
                className='registcleanstore_A' 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
            </div>
            <div className='registcleanstore_box_img'>
                <div className='registcleanstore_order'>사진을 첨부해주세요</div>
                <div className='registcleanstore_input_img'>
                  <label for="input_file" 
                  className="registcleanstore_input_file">
                  <img src={photo_icon} />
                  {fileImage && (
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: "auto" }}
                    width="200px"
                  />
                )}
                  </label>

                <input type="file" onChange={saveFileImage} id="input_file" accept="image/*"  required multiple/>
                </div>
            </div>
          </div>
          <div className='registcleanstore_main_bottom'>
            <a className='registcleanstore_back' 
            href='#'
            /*onClick={() => navigate(-1)}*/>← 작성 취소</a>
            <button 
            className='registcleanstore_save' 
            onClink={handleSubmit}>작성하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistCleanStore;