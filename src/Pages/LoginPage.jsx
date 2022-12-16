import React from "react";
import styled from "styled-components";
import Header1 from "../Components/Header1";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../features/authSlice";
//import store from "../features/Store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LoginPage() {
  let emailDefault = localStorage.getItem("email") ;
 
  console.log(emailDefault)
  const [email, setemail] = useState(emailDefault);
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { logedIn } = useSelector(state => state.user)
  const handlelogin = async (event) => {
    event.preventDefault();
    dispatch(signInUser({ email, password }))
    console.log(logedIn)
  

  }

  useEffect(() => {
    if (logedIn === true) {
      navigate('/profile');
      if (isChecked===true){
        localStorage.setItem("email", email)
      }

    
  }

  })

  const [isChecked, setIsChecked] = useState(localStorage.getItem("rememberMe") === "true" ? true : false)


    const toggleRememberMe = ({ target }) => {
        let { checked } = target;
        if (checked) {
            localStorage.setItem("rememberMe", checked);
            setIsChecked(checked);
            
          
        }
        if (!checked) {
            localStorage.removeItem("rememberMe");
            setIsChecked(checked);
        }
    }


  return (
    <LoginP>
      <Header1 />
      <MainBgDark>
        <SignInContent>
          <Sign>
        <FontAwesomeIcon icon={faUserCircle} color="#2c3e50" />
          <h1>Sign In</h1>
          </Sign>
          <form>
            <InputWrapper>
              <label htmlFor="username">Username</label><input type="text" id="username" value={email} onChange={(e) => setemail(e.target.value)} />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Password</label><input type="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} />
              </InputWrapper>
            <InputRemember>
              <input type="checkbox" id="remember-me"
                onChange={toggleRememberMe} checked={isChecked}
              /><label htmlFor="remember-me">Remember me</label>
            </InputRemember>

            <SignInBouton onClick={handlelogin}>Sign In</SignInBouton >

          </form>
        </SignInContent>
      </MainBgDark>
      <Footer />
    </LoginP>
  )
}

const LoginP = styled.main`
margin: 0;
display: flex;
flex-direction: column;
min-height: 100vh;


`
const MainBgDark = styled.section`
background-color: #12002b;
flex:1;

`
const SignInContent = styled.div`
box-sizing: border-box;
background-color: white;
width: 300px;
margin: 0 auto;
margin-top: 3rem;
padding: 2rem;
FontAwesomeIcon{
font-size: 5rem;
}

`
const InputWrapper = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-bottom: 1rem;
label {
  font-weight: bold;
}
input {
  padding: 5px;
  font-size: 1.2rem;
}
`
const InputRemember = styled.div `
display: flex;
label {
  margin-left: 0.25rem;
}
`
const SignInBouton = styled.button`
display: block;
width: 100%;
padding: 8px;
font-size: 1.1rem;
font-weight: bold;
margin-top: 1rem;
border-color: #00bc77;
background-color: #00bc77;
color: #fff;
text-decoration: underline;
`
const Sign= styled.div `
display:flex;
flex-direction: column;
align-items:center;
text-align: center;
`
export default LoginPage;