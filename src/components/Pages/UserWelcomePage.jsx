import React, { useContext } from "react";
import ContextApi from "../Context";
import { redirect } from "react-router-dom";

const WelcomePage = () => {
  const ctx = useContext(ContextApi);
  const logOutButtonHandler = () => {
    ctx.logout();
    redirect("/");
  };

  const verifyUserIdhandler = async ()=> {
    

  }

  return (
    <>
      <h1>Welcome to Expense Tracker!!!</h1>
      <button onClick={logOutButtonHandler}>Logout</button>
      <button onClick={verifyUserIdhandler}>Verify email</button>
    </>
  );
};

export default WelcomePage;
