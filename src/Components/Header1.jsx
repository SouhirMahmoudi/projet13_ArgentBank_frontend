import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"
import logo from "../Assets/argentBankLogo.png"
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header1() {


    return (
        <HeadMain>
           
                <NavLink to="/">
                    <img src={logo} alt="Argent Bank Logo" />
                    <h1>Argent Bank</h1>
                </NavLink>
        

            <SignIn> <NavLink to="/login"> <FontAwesomeIcon icon={faUserCircle} color="#2c3e50" />  Sign In</NavLink></SignIn>

        </HeadMain>

    )

}
const HeadMain = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
Navlink{
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #2c3e50;
.router-link-exact-active {
    color: #42b983;
  }
  img {
    max-width: 100%;
    width: 200px;

  }

}


  h1{
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }
  `

const SignIn = styled.div`
a{
text-decoration: none;
margin-right: 0.5rem;
font-weight: bold;
  color: #2c3e50;
  .router-link-exact-active {
    color: #42b983;
  }

:hover {
 text-decoration: underline;
}
}
 `



export default Header1;