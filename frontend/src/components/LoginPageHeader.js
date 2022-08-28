import "../css/LoginPage.css"

const LoginPageHeader=()=>{

    return(
<header className="LoginPage_header">
<a href="/main"><span><img src={process.env.PUBLIC_URL+`../img/로고 파랑 2.png`}></img> BZero</span></a>
        <a href="/login"><button className="LoginPage_header_loginbutton">로그인</button></a>
        <a href="/join"><button className="LoginPage_header_signin">회원가입</button></a>
    </header>
    )
}

export default LoginPageHeader