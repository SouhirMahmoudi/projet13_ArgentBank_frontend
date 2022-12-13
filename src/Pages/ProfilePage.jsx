import React from "react";
import store from "../features/Store";
import { useDispatch } from "react-redux";
import { getProfile, logout } from "../features/authSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";



function ProfilePage() {
 const dispatch = useDispatch();
 const Jwt = localStorage.getItem("token");
 //const [firstname, setfirstname] = useState("");
 // const [lastname, setlastname] = useState("");
 const navigate = useNavigate()
 //const firstname = useRef(store.getState().user.firstName)
 useEffect(() => {
  dispatch(getProfile({Jwt}));
   }, [dispatch, Jwt])
   
  

  const Signout =()=>{
    console.log(store.getState().user)
    dispatch(logout(store.getState().user))
    navigate('/');
    console.log(store.getState().user)
  }
  


  return (
    <main>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./user.html">
            <i className="fa fa-user-circle"></i>
            {store.getState().user.firstName}
          </a>
          <button onClick={Signout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br /> {store.getState().user.firstName}</h1>
          <button className="edit-button">Edit Name</button>
        </div>
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
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </main>
  )
}


export default ProfilePage;