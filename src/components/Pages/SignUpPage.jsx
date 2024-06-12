import { Container } from "@mui/material";
import React, { useRef, useState } from "react";
import load from '../assets/loadingNor.gif'

const SignupPage = () => {
    const [isLogin ,setIsLogin] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLoading, setIsloding] = useState(false);




    const submitHandler = (e)=>{
        e.preventDefault();

    }

    const switchAuthModeHandler = ()=> {

        setIsLogin(!isLogin);

    }

  return (
    <>
      <section>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </div>
          <div>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <div>
            {!isLoading && (
              <button type="submit">
                {isLogin ? "Login" : "Sign up"}
              </button>
            )}
            {isLoading && (
              <img style={{ height: "20px" }} src={load} alt="help"></img>
            )}
            <br/>
            <button
              type="button"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Dont have and Account? Create new account" : "Already have an Account? Login"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignupPage;
