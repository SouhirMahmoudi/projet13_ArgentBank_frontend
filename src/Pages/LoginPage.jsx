import React from "react";
import styled from "styled-components";
import Header1 from "../Components/Header1";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../features/authSlice";
import store from "../features/Store";
import { useNavigate } from "react-router-dom";

function LoginPage (){
 const [email, setemail]= useState("");
 const [password, setpassword]= useState("");
 const dispatch = useDispatch();
 const navigate = useNavigate()
 const handlelogin = async(event) => {
  event.preventDefault();
      dispatch(signInUser({email, password}))
      console.log(store.getState().user.logedIn)
     if(store.getState().user.logedIn === true){
      
    navigate('/profile');
    
     }    
 }

 
    return (
   <LoginP>
   <Header1/>
   <MainBgDark>
      <SignInContent>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <InputWrapper>
            <label htmlFor="username">Username</label><input type="text" id="username" value={email} onChange={(e) => setemail(e.target.value)}/>
            </InputWrapper>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label><input type="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
         
           <button className="sign-in-button" onClick={handlelogin}>Sign In</button>
        
        </form>
        </SignInContent>
      </MainBgDark>
  <Footer/>
   </LoginP>
    )
}

const LoginP = styled.main`

`
const MainBgDark = styled.section`

`
const SignInContent = styled.div`

`
const InputWrapper = styled.div``


export default LoginPage;