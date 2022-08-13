import "../css/LoginPage.css"

const LoginPageHeader=()=>{

    return(
<header className="LoginPage_header">
        <span>BZero</span>
        <button className="LoginPage_header_loginbutton">로그인</button>
        <button className="LoginPage_header_signin">회원가입</button>
    </header>
    )
}

export default LoginPageHeader