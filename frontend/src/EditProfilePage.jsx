import { useEffect } from "react";
import { useState } from "react";
import "./css/EditProfilePage.css";
import camera_icon from "./images/camera_icon.svg";
import withdrawl_icon from "./images/withdrawl_icon.svg";

function EditProfilePage() {

  const [profile_data, set_profile_data] = useState({
    name: "",
    nickname: "",
    email: "",
    birth: new Date(),
    age: 0,
    phone_number: "",
    profile_image: "",
  });
  const [edtiting_profile_data, set_edtiting_profile_data] = useState({
    name: "",
    nickname: "",
    email: "",
    birth: new Date(),
    age: 0,
    phone_number: "",
    profile_image: "",
  });
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
    // 제출 코드
  };

  const withdrawal_event = () => {
    // 제출 코드
  };

  const fetch_user_data = () => {
    const data = {
      name: "홍길동",
      nickname: "코카콜라",
      email: "example@example.com",
      gender: "male",
      birth: new Date(2000, 1, 1),
      age: 84,
      phone_number: "010-1234-5678",
      profile_image:
        "https://files.heftykrcdn.com/wp-content/uploads/2019/01/1557f9ce6b3048b34488694c02d63ad8-718x800.jpg",
    };
    return data;
  };

  useEffect(() => {
    const user_profile_data = fetch_user_data();
    set_edtiting_profile_data(user_profile_data);
    set_profile_data({ ...user_profile_data, password: "" });
    return;
  }, []);

  return (
    <div className="body">
      <header className="my_page_title">마이페이지</header>
      <div className="main_body">
        <div className="profile_body">
          <img
            className="profile_image"
            alt="profile"
            src={profile_data["profile_image"]}
          />
          <p className="profile_nickname">{profile_data["nickname"]}</p>
          <p className="profile_email">{profile_data["email"]}</p>
          <div>
            <button className="profile_edit_btn">내 정보 수정</button>
          </div>
          <div className="profile_navibar">
            <button className="navi_btn">내 정보</button>
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
                onChange={change_profile_image}
              />
            </div>
            <div className="input_div">
              <p className="input_tag">성명 *</p>
              <input
                className="input_text"
                value={edtiting_profile_data["name"]}
                onChange={(e) =>
                  set_edtiting_profile_data({
                    ...edtiting_profile_data,
                    name: e.target.value,
                  })
                }
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
              <p className="input_tag">이메일 *</p>
              <input
                type="email"
                className="input_text"
                value={edtiting_profile_data["email"]}
                onChange={(e) =>
                  set_edtiting_profile_data({
                    ...edtiting_profile_data,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="input_div">
              <p className="input_tag">비밀번호 *</p>
              <input
                className="input_text"
                value={edtiting_profile_data["password"]}
                onChange={(e) =>
                  set_edtiting_profile_data({
                    ...edtiting_profile_data,
                    password: e.target.value,
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
            <div className="input_div">
              <p className="input_tag">성별</p>
              <div className="radios">
                <div>
                  <input
                    id="male"
                    value="male"
                    name="gender"
                    type="radio"
                    className="radio"
                    checked={edtiting_profile_data["gender"] === "male"}
                    onChange={() =>
                      set_edtiting_profile_data({
                        ...edtiting_profile_data,
                        gender: "male",
                      })
                    }
                  />
                  <label>남성</label>
                </div>
                <div>
                  <input
                    id="female"
                    value="female"
                    name="gender"
                    type="radio"
                    className="radio"
                    checked={edtiting_profile_data["gender"] === "female"}
                    onChange={() =>
                      set_edtiting_profile_data({
                        ...edtiting_profile_data,
                        gender: "female",
                      })
                    }
                  />
                  <label>여성</label>
                </div>
              </div>
            </div>
            <div className="input_div">
              <p className="input_tag">나이</p>
              <input
                type="number"
                className="input_text"
                value={edtiting_profile_data["age"]}
                onChange={(e) =>
                  set_edtiting_profile_data({
                    ...edtiting_profile_data,
                    age: e.target.value,
                  })
                }
              />
            </div>
            <div className="input_div">
              <p className="input_tag">생년원일</p>
              <input
                className="input_text"
                type="date"
                value={edtiting_profile_data["birth"]
                  .toISOString()
                  .slice(0, 10)}
                onChange={(e) =>
                  set_edtiting_profile_data({
                    ...edtiting_profile_data,
                    birth: new Date(e.target.value),
                  })
                }
              />
            </div>
            <button className="sumbit_btn">완료</button>
          </div>
          <div className="withdrawal">
            <button className="withdrawal_btn" onChange={withdrawal_event}>
              탈퇴하기 <img src={withdrawl_icon} alt="withdrawl_icon"/>
              {/* <img src={`/static/withdrawl_icon.svg`} alt="withdrawl_icon"/> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
