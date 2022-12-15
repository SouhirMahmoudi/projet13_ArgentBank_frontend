import React from "react";
import { useDispatch } from "react-redux";
 import {EditUserInfos , logout} from "../features/authSlice";
 import { useState } from "react";
 import { NavLink } from "react-router-dom"
import logo from "../Assets/argentBankLogo.png"
import { useNavigate } from "react-router-dom";
import store from "../features/Store";
import styled from "styled-components";
import Footer from "../Components/Footer"
import { useSelector } from "react-redux";

function EditProfilePage() {
    let firstnameDefault = useSelector(state => state.user.firstName)
    let lastnameDefault = useSelector(state => state.user.lastName)
    const [firstname, setfirstname] = useState(firstnameDefault);
    const [lastname, setlastname] = useState(lastnameDefault);
    const dispatch = useDispatch();
    const Jwt = localStorage.getItem("token");
 
    console.log(store.getState().user)
    const UserInfos={firstname, lastname}
    const handleEdit = async (event) =>{
        event.preventDefault();
        dispatch(EditUserInfos({Jwt,UserInfos}))
        console.log({Jwt,UserInfos})
    }
    const navigate = useNavigate()
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
                <div>
                    <MainNavtem>
                        <i className="fa fa-user-circle"></i>
                    </MainNavtem>
                    <MainNavtem><button onClick={Signout}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </button></MainNavtem>
                </div>
            </Mainnavlogo>

            <MainbgDark>
                <Header>
                    <h1>Welcome back </h1>
                    <input type="text" placeholder ={firstnameDefault} value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                    <input type="text" placeholder ={lastnameDefault} value={lastname} onChange={(e) => setlastname(e.target.value)} />
                </Header>
                <button onClick={handleEdit}>save </button>
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
const MainNavtem = styled.div`
    text-decoration: none;
    margin-right: 0.5rem;
    font-weight: bold;
    color: #2c3e50;
    `
    
    const MainbgDark = styled.div ``
    const Header = styled.header``
    const MainG = styled.main``




export default EditProfilePage;