import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./../styles/Home.css"
import About from './About';
import Footer from './Footer';
import NavBar from '../pages/NavBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from '../pages/Login';



export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
	<div class="home">
    {/* <div>
      <NavBar />
    </div> */}
		<div class='carousel-item active img-fluid'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://schoolsearch.co.ke/blogs/wp-content/uploads/2020/11/moi-high-school.jpg"
          alt="Moi Kabarak"
        />
        <Carousel.Caption>
          <p>Sunshine</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://businesstoday.co.ke/wp-content/uploads/2020/05/Brookhouse.jpg"
          alt="BrookHouse"
        />

        <Carousel.Caption>
          <p>BrookHouse</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://netstorage-tuko.akamaized.net/images/e49ea53566b67470.jpg"
          alt="HillCrest Academy"
        />

        <Carousel.Caption>
          <p>HillCrest Academy</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
	</div>
	
	<div>
		<About />
	</div>
  <div>
    <Footer />
  </div>
{/* <Router>
  <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
		<Route path="/about">
          <About/>
        </Route>
      </Switch>
</Router> */}
	
	</div>
  );
}
