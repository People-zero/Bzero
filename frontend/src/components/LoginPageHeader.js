import "../css/LoginPage.css"
import { useEffect,useState } from "react";
import Axios from 'axios'
import jwt_decode from "jwt-decode";
const LoginPageHeader=()=>{
    const [user,setuser]=useState()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
		// 이미 로그인이 되어있다면 redirect
    if (localStorage.getItem('token') !== null) {
      setLoading(true)
    } else {
      setLoading(false);
    }
  }, []);
  const handleLogout = () => {
    let token = localStorage.getItem('token')
    
    Axios.post('https://bzeroo.herokuapp.com/https://bzero.tk/auth/logout/', token)
      .then(res => {
        localStorage.clear()
        // 사용하려면 App.js에서 /로 라우팅해야 한다
        window.location.replace('/main')
      });
  }
  



    return(
        <>
        {loading === false && (
<header className="LoginPage_header">
<a href="/main"><span><img src={process.env.PUBLIC_URL+`../img/로고 파랑 2.png`}></img> BZero</span></a>
        
        <a href="/login"><button className="LoginPage_header_loginbutton">로그인</button></a>
        <a href="/join"><button className="LoginPage_header_signin">회원가입</button></a>
    </header>
    )}
    {loading === true && (

<header className="LoginPage_header">
<a href="/main"><span><img src={process.env.PUBLIC_URL+`../img/로고 파랑 2.png`}></img> BZero</span></a>
        
        <button onClick={handleLogout} className="LoginPage_header_loginbutton">로그아웃</button>
        
    </header>

    )}
    </>
    )
        }

export default LoginPageHeader