import './App.css';
import React, {useEffect, useState}  from "react";
import NavBar from './pages/NavBar';
import jwt_decode from "jwt-decode";
import Home from './components/Home';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

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
      <div id="signInDiv" ></div>
      {Object.keys(user).length !== 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      }
      {user &&
        <div>
          <img src={user.picture}/>
          <h3>{user.name}</h3>
        </div>
      }
      <Home />
    </div>
    // <Login />
    // <NavBar />
  );
}

export default App;
