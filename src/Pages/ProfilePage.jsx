import React from "react";
import store from "../features/Store";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, logout } from "../features/authSlice";
//import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"
import logo from "../Assets/argentBankLogo.png"
//import { useRef } from "react";
import Footer from "../Components/Footer"
import styled from "styled-components";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ProfilePage() {
  const dispatch = useDispatch();
  const Jwt = localStorage.getItem("token");

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProfile({ Jwt }));
  })

  let firstname = useSelector(state => state.user.firstName)
  let lastname= useSelector(state => state.user.lastName)
  console.log(firstname)
  const Signout = () => {
    console.log(store.getState().user)
    dispatch(logout(store.getState().user))
    navigate('/');
    console.log(store.getState().user)
  }



  return (
    <MainG>
      <Mainnavlogo>

        <NavLink to="/">
          <img src={logo} alt="Argent Bank Logo" />
        </NavLink>

        <MainNavtem>
          <FontAwesomeIcon icon={faUserCircle}/>
          <p > {firstname}</p>
        
         <Btn onClick={Signout}><FontAwesomeIcon icon={faSignOut} />
            Sign Out
          </Btn>
        </MainNavtem>

      </Mainnavlogo>

      <MainbgDark>
        <Header>
          <h1>Welcome back <br></br> {firstname} {lastname}!</h1>
          <NavLink to="/editProfilePage" >  <EditButton>Edit Name</EditButton></NavLink>
        </Header>
        <SrOnly>Accounts</SrOnly>
        <Account>
          <Accountcontentwrapper>
            <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
            <AccountAmount>$2,082.79</AccountAmount>
            <AccountAmountDescription>Available Balance</AccountAmountDescription>
          </Accountcontentwrapper>
          <AccountContentWrapperCta>
            <TransactionButton>View transactions</TransactionButton>
          </AccountContentWrapperCta>
        </Account>
        <Account>
          <Accountcontentwrapper>
            <AccountTitle>Argent Bank Savings (x6712)</AccountTitle>
            <AccountAmount>$10,928.42</AccountAmount>
            <AccountAmountDescription>Available Balance</AccountAmountDescription>
          </Accountcontentwrapper>
          <AccountContentWrapperCta>
            <TransactionButton>View transactions</TransactionButton>
          </AccountContentWrapperCta>
        </Account>
        <Account>
          <Accountcontentwrapper>
            <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
            <AccountAmount>$184.30</AccountAmount>
            <AccountAmountDescription>Current Balance</AccountAmountDescription>
          </Accountcontentwrapper>
          <AccountContentWrapperCta>
            <TransactionButton>View transactions</TransactionButton>
          </AccountContentWrapperCta>
        </Account>
      </MainbgDark>
      <Footer />
    </MainG>
  )
}

const Mainnavlogo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 20px; 
img{
    max-width: 100%;
    width: 200px;
  }
  Navlink{
    display: flex;
    align-items: center;
  }
  `
const MainbgDark = styled.div`
background-color: #12002b;
flex:1;
`
const MainNavtem = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
text-decoration: none;
margin-right: 0.5rem;
font-weight: bold;
color: #2c3e50;
`

const Btn  = styled.a`
`
const MainG = styled.main`
flex: 1;`
const Header = styled.header`
color: #fff;
margin-bottom: 2rem;
text-align: center;`
const SrOnly = styled.h2`
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
`
const Account = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid black;
background-color: #fff;
width: 80%;
margin: 0 auto;
flex-direction: column;
padding: 1.5rem;
box-sizing: border-box;
text-align: left;
margin-bottom: 2rem;
@media (min-width: 720px)  {
  flex-direction: row;
}
  `

const Accountcontentwrapper = styled.div`
width: 100%;
flex: 1;
`
const AccountTitle = styled.h3`
margin: 0;
padding: 0;
font-size: 1rem;
font-weight: normal;`
const AccountAmount = styled.p`
margin: 0;
  font-size: 2.5rem;
  font-weight: bold;`
const AccountAmountDescription = styled.p`
margin: 0;`
const AccountContentWrapperCta = styled.div`
@media (min-width: 720px) {
    flex: 0;
}
  `
const TransactionButton = styled.button`
display: block;
width: 100%;
padding: 8px;
font-size: 1.1rem;
font-weight: bold;
margin-top: 1rem;
border-color: #00bc77;
background-color: #00bc77;
color: #fff;
@media (min-width: 720px) {
  width: 200px;
}
`
const EditButton = styled.button`
border-color: #00bc77;
background-color: #00bc77;
color: #fff;
font-weight: bold;
padding: 10px;
`


export default ProfilePage;