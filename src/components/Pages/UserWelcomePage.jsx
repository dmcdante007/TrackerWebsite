import React, { useContext, useState } from "react";
import ContextApi from "../Context";
import { redirect } from "react-router-dom";
import AddExpense from "./AddExpense";

const WelcomePage = () => {
  const ctx = useContext(ContextApi);
  const [showPremium, setShowPremium] = useState(false)
  const logOutButtonHandler = () => {
    ctx.logout();
    redirect("/");
  };
  

  const premiumFeatures = ()=> {


  }

  new Blob([], {type: 'text/plain'})
  

  return (
    <>
      <h1>Welcome to Expense Tracker!!!</h1>
      <button onClick={logOutButtonHandler}>Logout</button>
      <button >Verify email</button>
      {(ctx.totalIs>=100)? <button onClick={premiumFeatures}>Upgrade to Premium</button>: <button>Spend more than 100</button>}

      <a href="#">Download the list</a>
      <AddExpense/>
    
    </>
  );
};

export default WelcomePage;
