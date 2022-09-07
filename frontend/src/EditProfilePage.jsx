import { useEffect } from "react";
import { useState } from "react";
import "./css/EditProfilePage.css";
import camera_icon from "./images/camera_icon.svg";
import withdrawl_icon from "./images/withdrawl_icon.svg";
import axios from "axios";
import MypageNav from "./components/MypageNav";
const EditProfilePage=({userdata})=> {
  
  const[photo,setphoto]=useState()

  const [profile_data, set_profile_data] = useState({
    name: userdata[0]?.username,
    nickname: "",
    email: "",
    birth: new Date(),
    age: 0,
    phone_number: "",
    profile_image: "",
  });
  const [edtiting_profile_data, set_edtiting_profile_data] = useState({
    name: userdata[0]?.username,
    nickname: userdata[0]?.last_name,
    email: userdata[0]?.email,
    birth: new Date(),
    age: 0,
    phone_number: "",
    profile_image: "",
  });

  useEffect(()=>{
    
    if(userdata[0]?.profile?.profile_image!=null){
    set_edtiting_profile_data({
    name: userdata[0]?.username,
    nickname: userdata[0]?.last_name,
    email: userdata[0]?.email,
    birth: new Date(),
    age: 0,
    phone_number: userdata[0]?.phone_number,
    profile_image: userdata[0]?.profile.profile_image,
  })
}
else{
  
    set_edtiting_profile_data({
    name: userdata[0]?.first_name,
    nickname: userdata[0]?.last_name,
    email: userdata[0]?.email,
    birth: new Date(),
    age: 0,
    phone_number: userdata[0]?.phone_number,
    profile_image: userdata[0]?.profile.profile_image
})
  
  }
},[userdata])
  const change_phone_number = ({ target: { value } }) => {
    const regex = /[^0-9]/g; // 숫자가 아닌 문자열을 선택하는 정규식
    let phone_number = value.replace(regex, "");
    if (phone_number.length > 7)
      phone_number = `${phone_number.slice(0, 3)}-${phone_number.slice(
        3,
        7
      )}-${phone_number.slice(7, 11)}`;
    else if (phone_number.length > 3)
      phone_number = `${phone_number.slice(0, 3)}-${phone_number.slice(3, 7)}`;
    set_edtiting_profile_data({ ...edtiting_profile_data, phone_number });
  };
  const change_profile_image = ({ target: { files } }) => {
    const reader = new FileReader();
    reader.onload = () => {
      set_edtiting_profile_data({
        ...edtiting_profile_data,
        profile_image: reader.result,
      });
    };
    reader.readAsDataURL(files[0]);
  };

  const submit_event = () => {
    const id = userdata[0].id; //임시코드
 
    console.log(typeof(edtiting_profile_data.profile_image))
    axios.put(`http://127.0.0.1:8000/auth/accounts/${id}/`,{
      first_name:edtiting_profile_data.name,
      last_name:edtiting_profile_data.nickname,
      email:edtiting_profile_data.email,
      phone_number:edtiting_profile_data.phone_number,
      
      username: userdata[0]?.username,
      birth: userdata[0]?.birth,
      age: userdata[0]?.age,
  

      is_staff: userdata[0].is_staff,
  
 
  },{headers: {
    Authorization: "Token ".concat(localStorage.getItem("token")),
  }})
  axios.put(`http://127.0.0.1:8000/auth/profile/${id}/`
  ,{
    username:userdata[0]?.profile?.username,
    intro_comment:'ㄴㄴ',
    profile_image:edtiting_profile_data.profile_image,
    point:userdata[0]?.profile?.point
  },{headers: {
    Authorization: "Token ".concat(localStorage.getItem("token")),
  }})
window.location.replace('http://localhost:3000/mypage')
};
 
  const withdrawal_event = () => {
    // 제출 코드
  };

  useEffect(()=>{

    console.log(photo)
  },[photo])




  
  return (
    <div className="body">
      <MypageNav></MypageNav>
      <header className="my_page_title">마이페이지</header>
      <div className="main_body">
        <div className="profile_body">
          <img
            className="profile_image"
            alt="profile"
            src={edtiting_profile_data["profile_image"]}
          />
          <p className="profile_nickname">{edtiting_profile_data["nickname"]}</p>
          <p className="profile_email">{edtiting_profile_data["email"]}</p>
          <div>
            <button className="profile_edit_btn">내 정보 수정</button>
          </div>
          <div className="profile_navibar">
            <button style={{color:"#0679ff"}}className="navi_btn">내 정보</button>
            <button className="navi_btn">제로웨이스트 캘린더</button>
            <button className="navi_btn">제로웨이스트 일기</button>
          </div>
        </div>
        <div className="edit_profile">
          <p className="edit_profile_title">내 정보 수정</p>
          <div className="edit_profile_main">
            <p className="profile_input_tag">프로필 이미지 변경</p>
            <div className="profile_image_margin">
              <img
                className="profile_image"
                alt="profile"
                src={edtiting_profile_data["profile_image"]}
              />

              <label className="camera_upload_button" for="profile_upload">
                <img
                  className="camera_icon"
                  src={camera_icon}
                  alt="upload_button"
                />
                {/* <img
                  className="camera_icon"
                  src={`/static/camera_icon.svg`}
                  alt="upload_button"
                /> */}
              </label>
              <input
                type="file"
                accept="image/jpg,impge/png,image/jpeg"
                id="profile_upload"
                className="profile_upload"
                value=""
                onChange={change_profile_image}
              />
            </div>
           
            <div className="input_div">
              <p className="input_tag">닉네임 *</p>
              <input
                className="input_text"
                value={edtiting_profile_data["nickname"]}
                onChange={(e) =>
                  set_edtiting_profile_data({
                    ...edtiting_profile_data,
                    nickname: e.target.value,
                  })
                }
              />
            </div>
         
           
            <div className="input_div">
              <p className="input_tag">연락처 *</p>
              <input
                className="input_text"
                value={edtiting_profile_data["phone_number"]}
                onChange={change_phone_number}
              />
            </div>
            
            <button className="sumbit_btn" onClick={submit_event}>완료</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
