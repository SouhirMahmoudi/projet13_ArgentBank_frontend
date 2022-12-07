import React from "react";
import styled from "styled-components";
import Header1 from "../Components/Header1";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";

function LoginPage(){

    return (
   <LoginP>
   <Header1/>
   <MainBgDark>
      <SignInContent>
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <InputWrapper>
            <label for="username">Username</label><input type="text" id="username" />
            </InputWrapper>
          <div class="input-wrapper">
            <label for="password">Password</label><input type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
          </div>
         
          <Link to="/profile"> <button class="sign-in-button">Sign In</button> </Link>
        
        </form>
        </SignInContent>
      </MainBgDark>
  <Footer/>
   </LoginP>
    )
}

const LoginP = styled.body`

`
const MainBgDark = styled.body`

`
const SignInContent = styled.section`

`
const InputWrapper = styled.div``


export default LoginPage;