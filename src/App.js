import './App.css';
import React, {useEffect, useState}  from "react";
import NavBar from './pages/NavBar';
import SlideBar from './components/SideNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'



function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    // auto-login
    fetch("https://school-performance-api.herokuapp.com/auth/login").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <SlideBar />
    {/* <NavBar /> */}
    </div>
  );
}

export default App;
