import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUp";
import { Button } from "../styles";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

//   function handleCallbackResponse (response){
//     console.log("Encoded JWT ID token: " + response.credential);
//   }

//   useEffect(()=>{
//     /*global google*/
//     google.accounts.id.initialize({
//       client_id: "448746183538-8hba36viefmg9jue1eacebrkktr9bks9.apps.googleusercontent.com",
//       callback: handleCallbackResponse
//     });
//     google.accounts.id.renderButton(
//       document.getElementById("signInDiv"),
//       {theme: "outline", size: "large"}
//     )
//   }, []);

  return (
    <Wrapper>
      <Logo>Cheki_Results</Logo>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Logo = styled.h1`
//   font-family: "Baloo 2", cursive;
  font-size: 3rem;
  color: black;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;
