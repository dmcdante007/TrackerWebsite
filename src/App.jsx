import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Pages/Header/Header";
import SignupPage from "./components/Pages/SignUpPage";
import { Router, redirect } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ContextApi from "./components/Context";
import WelcomePage from "./components/Pages/UserWelcomePage";
import AddExpense from "./components/Pages/AddExpense";




function App() {
  const ctx = useContext(ContextApi)

  return (
    <>
      <Header />
      <AddExpense/>
      
      <Routes>
       
        <Route path="/" element={<SignupPage />} />
        <Route path="/Welcome" element={ctx.isLoggedIn ? <WelcomePage/>: <SignupPage/>} />
         
      </Routes>
    </>
  );
}

export default App;
