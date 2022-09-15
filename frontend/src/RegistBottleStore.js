import './css/RegistBottleStore.css';
import React, { useState,useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import icon_earth from './images/icon1.svg'
import photo_icon from './images/photo_icon.svg'
import mainlogo from './images/logo2.svg'
import MapNav from './components/MapNav';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const RegistBottleStore = ({store})=>{
  //const contentRef = useRef();
  //const navigate = useNavigate();

  const [state, setState] = useState({
    ...{store},
  });

  const handleChangeState = (e)=> {
    

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


const handleSubmit = () => {
  //저장하기
}

  return (
    <div className="RegistBottleStore">
      <MapNav/>
      
      <div className='registbottlestore_right'>
        <div className='registbottlestore_navbar_top'>
          <div className='registbottlestore_text'>
            <div className='registbottlestore_line1'>
              <p className='registbottlestore_title1'>스토어 등록</p>
              <p className='registbottlestore_title2'>공병 스토어</p>
            </div>
            <p>아래 내용들을 입력해서 스토어를 등록해보세요</p>
          </div>
          <div className='registbottlestore_logo'>
            <img src={icon_earth} width='70px'/>
          </div>
        </div>
        <div className='registbottlestore_main'>
          <div className='registbottlestore_boxes'>
            <div className='registbottlestore_box_question'>
              <div className='registbottlestore_box'>
                <div className='registbottlestore_Q'>가게 이름을 작성해주세요</div>
                <textarea 
                name='name'
                value={state.name}
                className='registbottlestore_A' 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registbottlestore_box'>
                <div className='registbottlestore_Q'>가게 정보를 작성해주세요</div>
                <textarea 
                name='info_summamary'
                className='registbottlestore_A'
                value = {state.info_summary} 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registbottlestore_box'>
                <div className='registbottlestore_Q'>영업 정보를 작성해주세요</div>
                <textarea 
                name='businessday'
                className='registbottlestore_A'
                value = {state.businessday}
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registbottlestore_box'>
                <div className='registbottlestore_Q'>수거 가능한 공병을 선택해주세요</div>
                <div
                className='registbottlestore_A'
                value = {state.collectable}
                onChange = {handleChangeState}>
               <p><label><input type="checkbox" name='collectable' value="소형 및 중형"/>소형 및 중형</label></p>
                <p><label><input type="checkbox" name='collectable' value="대형 및 유류 정종"/>대형 및 유류 정종</label></p>
                <p><label><input type="checkbox" name='collectable' value="화장품 및 기타 공병"/>화장품 및 기타 공병</label></p>
                </div>
              </div>
              <div className='registbottlestore_box'>
                <div className='registbottlestore_Q'>수거 가능한 날을 작성해주세요</div>
                <textarea 
                name='collectday'
                className='registbottlestore_A'
                value = {state.collectday}
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registbottlestore_box'>
                <div className='registbottlestore_Q'>어떤 가게인지 자세한 설명을 작성해주세요</div>
                <textarea className='registbottlestore_A' 
                name='info'
                value = {state.info} 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registbottlestore_box'>
                <div className='registbottlestore_Q'>가게 주소를 작성해주세요</div>
                <textarea 
                name='address'
                className='registbottlestore_A'
                value = {state.address} 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registbottlestore_box'>
                <div className='registbottlestore_Q'>가게 연락처를 작성해주세요</div>
                <textarea type="tel"
                className='registbottlestore_A' 
                name='number'
                value = {state.number} 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              <div className='registbottlestore_box'>
                <div className='registbottlestore_Q'>관련 링크가 있다면 첨부해주세요</div>
                <textarea type="url"
                name='store_url'
                value={state.store_url}
                className='registbottlestore_A' 
                onChange = {handleChangeState}
                placeholder='내용을 입력해주세요'/>
              </div>
              
            </div>
            <div className='registbottlestore_box_img'>
                <div className='registbottlestore_order'>사진을 첨부해주세요</div>
                <div className='registbottlestore_input_img'>
                  <label for="input_file" 
                  className="registbottlestore_input_file">
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

                <input type="file" style={{ display: "none" }} onChange={saveFileImage} id="input_file" accept="image/*"/>
                </div>
            </div>
          </div>
          <div className='registbottlestore_main_bottom'>
            <a className='registbottlestore_back' 
            href='#'
            /*onClick={() => navigate(-1)}*/>← 작성 취소</a>
            <button 
            className='registbottlestore_save' 
            onClink={handleSubmit}>작성하기</button>
          </div>
        </div>
      </div>
      </div>
  );
  
};

export default RegistBottleStore;