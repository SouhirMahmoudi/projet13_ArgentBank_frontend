import React from "react";
import store from "../features/Store";
import { useDispatch, useSelector } from "react-redux";
import {getProfile, logout } from "../features/authSlice";
//import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"
import logo from "../Assets/argentBankLogo.png"
//import { useRef } from "react";
import Footer from "../Components/Footer"
import styled from "styled-components";


function ProfilePage() {
  const dispatch = useDispatch();
  const Jwt = localStorage.getItem("token");

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProfile({ Jwt }));
  })

  let firstname = useSelector(state => state.user.firstName)
  console.log(firstname)
  const Signout = () => {
    console.log(store.getState().user)
    dispatch(logout(store.getState().user))
    navigate('/');
    console.log(store.getState().user)
  }
 
 /* const EditName=()=>async(event) => {
    event.preventDefault();
    navigate('/editProfilePage')}*/

 /*const EditName=()=>{async(event) => {
  event.preventDefault();
  dispatch(EditUserInfos(Jwt, firstnameInput, lastnameInput))

 }}*/




  return (
    <MainG>
        <Mainnavlogo>
          <NavLink to="/">
            <img src={logo} alt="Argent Bank Logo" />
          </NavLink>
          <div>
          <MainNavtem>
            <i className="fa fa-user-circle"></i>
            <p > {firstname}</p>
          </MainNavtem>
          <MainNavtem><button onClick={Signout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button></MainNavtem>
          </div>
        </Mainnavlogo>
      
      <MainbgDark>
        <Header>
          <h1>Welcome back {firstname}</h1>
       <NavLink to="/editProfilePage" >  <button className="edit-button" >Edit Name</button></NavLink>
        </Header>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
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
  const MainbgDark = styled.div ``
const MainNavtem = styled.div`
text-decoration: none;
margin-right: 0.5rem;
font-weight: bold;
color: #2c3e50;
`
const MainG= styled.main``
const Header = styled.header ``
export default ProfilePage;