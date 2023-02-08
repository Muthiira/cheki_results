import React, { useState, useEffect } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [history, setHistory] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://school-performance-api.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      

    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user));
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    });
  }

  function handleCallbackResponse (response){
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(()=>{
    /*global google*/
    google.accounts.id.initialize({
      client_id: "448746183538-8hba36viefmg9jue1eacebrkktr9bks9.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
    google.accounts.id.prompt();
  }, []);

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
    <div>
    {/* <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button> */}

   <div id="signInDiv" ></div>
      {/* {Object.keys(user).length !== 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      } */}
      {user &&
        <div>
          {/* <img src={user.picture} alt="user" /> */}
          <h3>{user.name}</h3>
        </div>
      }
    </div>
    </div>
  );
}

export default LoginForm;
