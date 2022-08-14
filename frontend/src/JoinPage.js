const JoinPage = () => {
  return (
    <div className="join_page">
      <div className="join_page_nav">
        <a href="#main">BZero</a>
        <button className="join_page_login_btn">로그인</button>
        <button className="join_page_goto_join_btn">회원가입</button>
      </div>
      <div className="join_page_container">
        <div className="join_page_row">
          <p>
            제로피플을 이용하려면
            <br /> 먼저 회원가입이 필요해요 :)
          </p>
          <div className="join_page_detail">
            <label id="type">가입 유형*</label>
          </div>
          <button className="join_page_user_type_btn">개인</button>
          <button className="join_page_user_type_btn">사업자</button>
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
          <div className="join_page_detail">
            <span>성별22</span>
          </div>
          <h4 className="join_page_detail">
            <label id="gender">성별</label>
          </h4>
          <label>
            php
            <input type="checkbox" name="languages" value="php" />
            java
            <input type="checkbox" name="languages" value="java" />
          </label>
          <h4 className="join_page_detail">
            <label id="age">나이</label>
          </h4>
          <h4 className="join_page_detail">
            <label id="birth">생년월일</label>
          </h4>
          <input className="join_page_date" type="date" />
          <section>
            <input className="join_page_all_check" type="checkbox" />
            가입 약관에 모두 동의합니다.
          </section>
          <button className="join_page_cancel_btn">취소</button>
          <button className="join_page_join_btn">가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
