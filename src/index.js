import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from "../src/Pages/HomePage"
import ErrorPage from "../src/Pages/ErrorPage"
import reportWebVitals from './reportWebVitals';
import LoginPage from '../src/Pages/LoginPage';
import store from "../src/features/Store"
import ProfilePage from './Pages/ProfilePage';
import EditProfilePage from './Pages/EditProfilePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/editProfilePage" element={<EditProfilePage/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();