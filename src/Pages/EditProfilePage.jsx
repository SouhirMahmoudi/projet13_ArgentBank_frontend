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
     const cancelEdit=()=>{
        navigate('/profile')

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
                   <br></br> <button onClick={handleEdit}> Save </button>
                     <button onClick={cancelEdit}> Cancel</button>
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
text-align: center;
input{
    margin-left:10px;
}
button {
    margin-left :10px;
    width:110px;
}`
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




export default EditProfilePage;