import "../css/LoginPage.css"

const LoginPageHeader=()=>{

    return(
<header className="LoginPage_header">
        <span><img src={process.env.PUBLIC_URL+`../img/로고 파랑 2.png`}></img> BZero</span>
        <button className="LoginPage_header_loginbutton">로그인</button>
        <button className="LoginPage_header_signin">회원가입</button>
    </header>
    )
}

export default LoginPageHeader