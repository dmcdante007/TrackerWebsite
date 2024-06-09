import { Container } from "@mui/material";
import React, { useRef } from "react";

const SignupPage = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",

          width: "250px",
          height: "300px",
          textAlign: "center",
        }}
      >
        <form
          style={{
            marginTop: "250px",
            marginLeft: "700px",
            width: "250px",
            height: "300px",
            textAlign: "center",
            border: "2px soild #04AA6D",
          }}
        >
          <h2 style={{}}>Sign Up</h2>
          <input id="email" type="text" placeholder="Email" required />
          <br />
          <input
            id="password"
            type="password"
            placeholder="password"
            required
          />{" "}
          <br />
          <input
            type="password"
            id="confirmPass"
            placeholder="Confirm Password"
          />{" "}
          <br />
          <button
            type="submit"
            style={{
              width: "70%",
              height:'30px',
              borderRadius: "10px",
              backgroundColor: "blue",
            }}
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
