import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginPageHeader from "./components/LoginPageHeader";
import "./css/JoinPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const JoinPage = () => {
  const navigate=useNavigate()
  const [isStaff, setIsStaff] = useState(false);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("남자");
  const [age, setAge] = useState(15);
  const [birth, setBirth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(true);
  useEffect(() => {
  if (localStorage.getItem('token') !== null) {
    window.location.replace('https://bzero.cf/main');
  } else {
    setLoading(false);
  }
}, []);
  const user_type_btn_event_1 = () => {
    setUserType(true);
  };

  const user_type_btn_event_2 = () => {
    setUserType(false);
  };

  const age_list_make = () => {
    var age_list = [];
    for (var i = 15; i < 100; i++) {
      age_list.push(<option value={i}>{i}</option>);
    }
    return age_list;
  };

  const [all_check, set_all_check] = useState(false);
  const [use_check, set_use_check] = useState(false);
  const [info_use_check, set_info_use_check] = useState(false);
  const [age_check, set_age_check] = useState(false);

  const all_btn_event = () => {
    if (all_check === false) {
      set_all_check(true);
      set_use_check(true);
      set_info_use_check(true);
      set_age_check(true);
    } else {
      set_all_check(false);
      set_use_check(false);
      set_info_use_check(false);
      set_age_check(false);
    }
  };
  const use_btn_event = () => {
    if (use_check === false) {
      set_use_check(true);
    } else {
      set_use_check(false);
    }
  };

  const info_use_btn_event = () => {
    if (info_use_check === false) {
      set_info_use_check(true);
    } else {
      set_info_use_check(false);
    }
  };

  const age_btn_event = () => {
    if (age_check === false) {
      set_age_check(true);
    } else {
      set_age_check(false);
    }
  };

  useEffect(() => {
    if (use_check === true && info_use_check === true && age_check === true) {
      set_all_check(true);
    } else {
      set_all_check(false);
    }
  }, [use_check, info_use_check, age_check]);

  const join = () => {
    axios
      .post("https://bzeroo.herokuapp.com/https://bzero.tk/auth/registration/", {
        username: email,
        email: email,
        password1: pwd1,
        password2: pwd2,
        birth: birth,
        age: age,
        phone_number: phone,
        name: name,
        nickname: nickname,
        gender: gender,
        is_staff: isStaff,
       
      })
      .then(() => {
        // Handle success.
        window.location.replace('https://bzero.cf/main')
        //페이지 이동 필요
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
        // alert('')
        alert("중복된 회원정보이거나, 양식에 맞춰 다시 작성해주세요")
      });
  };


  return (
    <div className="join_page">
      <LoginPageHeader></LoginPageHeader>
      <div className="join_page_container">
        <div className="join_page_row">
          <p>
            제로피플을 이용하려면
            <br /> 먼저 회원가입이 필요해요 :)
          </p>
          <div className="join_page_detail">
            <label id="type">가입 유형*</label>
          </div>
          {isStaff ? (
            <div>
              <button
                className="join_page_user_type_btn_2"
                onClick={() => {
                  setIsStaff(false);
                  user_type_btn_event_1();
                  
                }}
              >
                개인
              </button>
              <button
                className="join_page_user_type_btn_1"
                onClick={() => {
                  user_type_btn_event_2();
                  setIsStaff(true);
                 
                }}
              >
                사업자
              </button>
            </div>
          ) : (
            <div>
              <button
                className="join_page_user_type_btn_1"
                onClick={() => {
                  setIsStaff(false);
                  user_type_btn_event_1();

                 
                }}
                value={isStaff}
              >
                개인
              </button>
              <button
                className="join_page_user_type_btn_2"
                onClick={() => {
                  user_type_btn_event_2();
                  setIsStaff(true);
                  
                }}
              >
                사업자
              </button>
            </div>
          )}
          <h4 className="join_page_detail">
            <label id="name">성명*</label>
          </h4>
          <input
            className="join_page_input"
            placeholder="성명을 입력해주세요"
            value={name || ""}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
          <div className="join_page_detail_nickname">
            <h4 className="join_page_detail">
              <label id="nickname">닉네임*</label>
            </h4>
            <h4 className="join_page_nickname_detail">
              ※닉네임은 성함, 이메일과 겹치지 않아야 합니다.
            </h4>
          </div>
          <input
            className="join_page_input"
            placeholder="닉네임을 입력해주세요"
            value={nickname || ""}
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          ></input>
          <h4 className="join_page_detail">
            <label id="email">이메일*</label>
          </h4>
          <input
            className="join_page_input"
            placeholder="예: bzero@example.com"
            value={email || ""}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
          <h4 className="join_page_detail">
            <label id="pwd">비밀번호*</label>
          </h4>
          <input
            className="join_page_input"
            placeholder="8자 이상의 비밀번호를 입력해주세요"
            value={pwd1 || ""}
            onChange={(event) => {
              setPwd1(event.target.value);
            }}
          ></input>
          <h4 className="join_page_detail">
            <label id="pwd_check">비밀번호 재확인*</label>
          </h4>
          <input
            className="join_page_input"
            placeholder="8자 이상의 비밀번호를 입력해주세요"
            value={pwd2 || ""}
            onChange={(event) => {
              setPwd2(event.target.value);
            }}
          ></input>
          <h4 className="join_page_detail">
            <label id="phone_number">연락처*</label>
          </h4>
          <input
            className="join_page_input"
            id="phone_number"
            placeholder="숫자만 입력해주세요"
            value={phone || ""}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          ></input>
          <h4 className="join_page_detail">
            <label>성별*</label>
          </h4>
          <div className="join_page_radio">
            <input
              id="male"
              type="radio"
              defaultChecked
              value="남성"
              name="gender"
              onClick={(event) => {
                setGender(event.target.value);
              }}
            ></input>
            <label style={{ marginRight: "40px" }} htmlFor="male">
              남성
            </label>
            <input
              id="female"
              type="radio"
              value="여성"
              name="gender"
              onClick={(event) => {
                setGender(event.target.value);
              }}
            ></input>
            <label htmlFor="female">여성</label>
          </div>
          <h4 className="join_page_detail">
            <label id="age">나이*</label>
          </h4>
          <select
            value={age || ""}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          >
            {age_list_make()}
          </select>
          <h4 className="join_page_detail">
            <label id="birth">생년월일*</label>
          </h4>
          <input
            className="join_page_date"
            type="date"
            data-placeholder="YYYY / MM / DD"
            required
            aria-required="true"
            value={birth || ""}
            onChange={(event) => {
              setBirth(event.target.value);
            }}
          />
          <section>
            <div className="join_page_all_check">
              <input
                type="checkbox"
                id="all_check"
                checked={all_check}
                onChange={all_btn_event}
              />
              <label htmlFor="all_check">가입 약관에 모두 동의합니다.</label>
            </div>
            <div>
              <div>
                <div className="join_page_check">
                  <div className="join_page_check_part">
                    <input
                      type="checkbox"
                      id="check1"
                      checked={use_check}
                      onChange={use_btn_event}
                    />
                    <label htmlFor="check1">이용약관 동의 *</label>
                  </div>

                  <a
                    className="join_page_check_detail_1"
                    href="#terms_of_service"
                  >
                    확인하기
                  </a>
                </div>
              </div>

              <div className="join_page_check">
                <div className="join_page_check_part">
                  <input
                    type="checkbox"
                    id="check2"
                    checked={info_use_check}
                    onChange={info_use_btn_event}
                  />
                  <label htmlFor="check2">개인정보 수집 및 이용 동의 *</label>
                </div>
                <a
                  className="join_page_check_detail_2"
                  href="#terms_of_service"
                >
                  확인하기
                </a>
              </div>
              <div className="join_page_check">
                <div className="join_page_check_part">
                  <input
                    type="checkbox"
                    id="check3"
                    checked={age_check}
                    onChange={age_btn_event}
                  />
                  <label htmlFor="check3">만 14세 이상입니다. *</label>
                </div>

                <a
                  className="join_page_check_detail_3"
                  href="#terms_of_service"
                >
                  확인하기
                </a>
              </div>
            </div>
          </section>
          <button className="join_page_cancel_btn">취소</button>
          <button
            className="join_page_join_btn"
            onClick={() => {
              join();
            }}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;