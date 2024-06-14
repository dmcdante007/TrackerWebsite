import React, { useRef, useState, useContext } from "react";
import load from "../assets/loadingNor.gif";
import ContextApi from "../Context";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsloding] = useState(false);
    const ctx = useContext(ContextApi)
  const history = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    setIsloding(true);
    const emailIs = emailInputRef.current.value;
    const passIs = passwordInputRef.current.value;
    let url;
    if(isLogin){
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvOmNGLPl3_8el7x7ah_Ha8s9rF9P5pb4'
    }
    else{
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvOmNGLPl3_8el7x7ah_Ha8s9rF9P5pb4'
    }

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email : emailIs,
            password : passIs,
            returnSecureToken: true,
        }),
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res)=>{
        // console.log('in 1st Then')
        setIsloding(false);
        if(res.ok){
            return res.json()
        }
        else{
            return res.json().then((data) => {
              let errorMessage = "Authentication failed!";
              throw new Error(errorMessage);
            });
          }

    }).then((data) => {
        // console.log('In 2nd Then')
        ctx.login(data.idToken);
        history('/Welcome');
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });

  };

  const switchAuthModeHandler = () => {
    setIsLogin(!isLogin);
  };

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
              <button type="submit">{isLogin ? "Login" : "Sign up"}</button>
            )}
            {isLoading && (
              <img style={{ height: "20px" }} src={load} alt="help"></img>
            )}
            <br />
            <button type="button" onClick={switchAuthModeHandler}>
              {isLogin
                ? "Dont have and Account? Create new account"
                : "Already have an Account? Login"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignupPage;
