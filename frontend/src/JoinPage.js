import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPageHeader from "./components/LoginPageHeader";
import "./css/JoinPage.css"


const JoinPage = () => {
  const navigate=useNavigate();
  const [user_type, set_user_type] = useState(true);

  const user_type_btn_event_1 = () => {
    set_user_type(true);
  };

  const user_type_btn_event_2 = () => {
    set_user_type(false);
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
          {user_type ? (
            <div>
              <button
                className="join_page_user_type_btn_1"
                onClick={() => user_type_btn_event_1()}
              >
                개인
              </button>
              <button
                className="join_page_user_type_btn_2"
                onClick={() => user_type_btn_event_2()}
              >
                사업자
              </button>
            </div>
          ) : (
            <div>
              <button
                className="join_page_user_type_btn_2"
                onClick={() => user_type_btn_event_1()}
              >
                개인
              </button>
              <button
                className="join_page_user_type_btn_1"
                onClick={() => user_type_btn_event_2()}
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
          ></input>
          <h4 className="join_page_detail">
            <label id="nickname">닉네임*</label>
          </h4>
          <input
            className="join_page_input"
            placeholder="닉네임을 입력해주세요"
          ></input>
          <h4 className="join_page_detail">
            <label id="email">이메일*</label>
          </h4>
          <input
            className="join_page_input"
            placeholder="예: peolezero@example.com"
          ></input>
          <h4 className="join_page_detail">
            <label id="pwd">비밀번호*</label>
          </h4>
          <input
            className="join_page_input"
            placeholder="6자 이상의 비밀번호를 입력해주세요"
          ></input>
          <h4 className="join_page_detail">
            <label id="pwd_check">비밀번호 재확인*</label>
          </h4>
          <input
            className="join_page_input"
            placeholder="6자 이상의 비밀번호를 입력해주세요"
          ></input>
          <h4 className="join_page_detail">
            <label id="phone_number">연락처*</label>
          </h4>
          <input
            className="join_page_input"
            id="phone_number"
            placeholder="숫자만 입력해주세요"
          ></input>
          <h4 className="join_page_detail">
            <label>성별</label>
          </h4>

          <div className="join_page_radio">
            <input
              id="male"
              type="radio"
              checked
              value="남성"
              name="gender"
            ></input>
            <label style={{marginRight:"40px"}}for="male">남성</label>

            <input id="female" type="radio" value="여성" name="gender"></input>
            <label for="female">여성</label>
          </div>

          <h4 className="join_page_detail">
            <label id="age">나이</label>
          </h4>
          <select>{age_list_make()}</select>
          <h4 className="join_page_detail">
            <label id="birth">생년월일</label>
          </h4>
          <input
            className="join_page_date"
            type="date"
            data-placeholder="YYYY / MM / DD"
            required
            aria-required="true"
          />
          <section>
            <div className="join_page_all_check">
              <input
                type="checkbox"
                id="all_check"
                checked={all_check}
                onChange={all_btn_event}
              />
              <label for="all_check">가입 약관에 모두 동의합니다.</label>
            </div>
            <div>
              <div>
                <div className="join_page_check">
                  <input
                    type="checkbox"
                    id="check1"
                    checked={use_check}
                    onChange={use_btn_event}
                  />
                  <label for="check1">이용약관 동의 *</label>
                  <a
                    className="join_page_check_detail_1"
                    href="#terms_of_service"
                  >
                    확인하기
                  </a>
                </div>
              </div>

              <div className="join_page_check">
                <input
                  type="checkbox"
                  id="check2"
                  checked={info_use_check}
                  onChange={info_use_btn_event}
                />
                <label for="check2">개인정보 수집 및 이용 동의 *</label>
                <a
                  className="join_page_check_detail_2"
                  href="#terms_of_service"
                >
                  확인하기
                </a>
              </div>
              <div className="join_page_check">
                <input
                  type="checkbox"
                  id="check3"
                  checked={age_check}
                  onChange={age_btn_event}
                />
                <label for="check3">만 14세 이상입니다. *</label>
                <a
                  className="join_page_check_detail_3"
                  href="#terms_of_service"
                >
                  확인하기
                </a>
              </div>
            </div>
          </section>
          <button onClick={()=>navigate(-1)} className="join_page_cancel_btn">취소</button>
          <button className="join_page_join_btn">가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
