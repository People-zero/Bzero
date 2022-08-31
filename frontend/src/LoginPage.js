import { useState,useEffect } from "react"
import LoginPageHeader from "./components/LoginPageHeader"
import "./css/LoginPage.css"
import jwt_decode from "jwt-decode";
const LoginPage=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
		// 이미 로그인이 되어있다면 redirect
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/mypage');
    } else {
      setLoading(false);
    }
  }, []);
  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      password: password
    };

    fetch('http://127.0.0.1:8000/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/mypage');
        } else {
          setUsername('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };
  const [user, setUser] = useState(() =>
  localStorage.getItem("token")
    ? jwt_decode(localStorage.getItem("token"))
    : null
);
    return(
   
    

    <div className="LoginPage">
    <LoginPageHeader></LoginPageHeader>    
    
    <div className="LoginPage_body">

    <div className="LoginPage_infotext">

        <span className="LoginPage_headtext">
        🖐 이미 BZero 회원이신가요?
        </span>
        
        <span className="LoginPage_bodytext">
            먼저 로그인을 해주세요 :)
        </span>
    </div>

    <div className="LoginPage_loginbox">

        <span className="LoginPage_loginmain">
            아이디
        </span>
        <input placeholder="아이디를 입력해주세요" value={username} required onChange={e=>setUsername(e.target.value)} name='username' type='username' className="LoginPage_inputbox">

        </input>
        <span  className="LoginPage_loginmain">
            비밀번호
        </span>
        <input placeholder="비밀번호를 입력해주세요" value={password} className="LoginPage_inputbox" name='password'
            type='password'
            
            required
            onChange={e => setPassword(e.target.value)}>
            
        </input>
        <button onClick={onSubmit} className="LoginPage_mainloginbutton">
            로그인
        </button>
        <div className="LoginPage_smalltextbox">
        <span className="LoginPage_smalltext">
        ❗️ 아직 비제로 회원이 아니신가요?
        </span>
        <a href="/join">
        <span style={{color:'#0679FF',marginLeft:"110px"}}className="LoginPage_smalltext">
        회원가입 하기
        
        </span>
        </a>
        </div>
        
        <line className="LoginPage_line"></line>
        
        <div className="LoginPage_Snsbox">
            <span className="LoginPage_snstext">
            SNS로 간편하게 시작하기
            </span>
            <div className="LoginPage_SNSBUTTON_NAVER">
                <img style={{right:'110px',top:'2px'}}src={process.env.PUBLIC_URL+`../img/Naver.png`}></img>
                {/* <img style={{right:'110px',top:'2px'}}src={`static/Naver.png`}></img> */ }
                {/* 장고랑 연결할떄, 배포할때는 위 주석 코드 사용 */}
                네이버 로그인
            </div>
            <div style={{paddingTop:'10px'}} className="LoginPage_SNSBUTTON_GOOGLE">
            <img src={process.env.PUBLIC_URL+`../img/Google.png`}></img>
            {/* <img style={{right:'110px',top:'2px'}}src={`static/Google.png`}></img> */ }
                {/* 장고랑 연결할떄, 배포할때는 위 주석 코드 사용 */}
                구글 로그인
            </div>

            
        </div>
    </div>
    </div>
    
    
    </div>
    )
}

    


export default LoginPage