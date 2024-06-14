import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Pages/Header/Header";
import SignupPage from "./components/Pages/SignUpPage";
import { Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ContextApi from "./components/Context";
import WelcomePage from "./components/Pages/UserWelcomePage";




function App() {
  const ctx = useContext(ContextApi)

  return (
    <>
      <Header />
      
      <Routes>
       
        <Route path="/" element={<SignupPage />} />
        <Route path="/Welcome" element={<WelcomePage/>}/>
         
      </Routes>
    </>
  );
}

export default App;
