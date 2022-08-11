//import {useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
//import SearchBar from './components/SearchBar';
import rainy from  "./assets/rain.png";
import cloudy from "./assets/cloud.jpg";
import About from './components/About';
import Home from './components/Home';
import cloudyPhone from './assets/earth2.png';
import rainyPhone from './assets/rain2.png';
import sunny from './assets/sunny.jpg';
import sunnyPhone from './assets/sunny2.jpg';
import clear from './assets/clear.jpg';
import clearPhone from './assets/blue2.png';
import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";



function App() {

	let weather = "clear";

	if (weather === 'rainy') {
		if (window.matchMedia("(max-width: 600px)").matches) {
			document.body.style.backgroundImage = `url(${rainyPhone})`;
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundRepeat = "no-repeat";		
		} else {
			document.body.style.background = `rgba(0,0,0,0.2)url(${rainy})`;
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundRepeat = "repeat-y";
			document.body.style.backgroundBlendMode = "darken";
		}
		
	}
	else if (weather === 'cloudy') {
		if (window.matchMedia("(max-width: 600px)").matches) {
			document.body.style.background = `rgba(0,0,0,0.2)url(${cloudyPhone})` ;
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundBlendMode = "darken";

		} else {
		document.body.style.background = `rgba(0,0,0,0.2)url(${cloudy})` ;
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundRepeat = "repeat-y";
		document.body.style.backgroundBlendMode = "darken";

	}
	}

	else if (weather === 'sunny') {
		if (window.matchMedia("(max-width: 600px)").matches) {
			document.body.style.background = `rgba(0,0,0,0.2)url(${sunnyPhone})` ;
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundBlendMode = "darken";

		} else {
		document.body.style.background = `rgba(0,0,0,0.2)url(${sunny})` ;
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundRepeat = "repeat-y";
		document.body.style.backgroundBlendMode = "darken";
	}
	}
	
	else if (weather === 'clear') {
		if (window.matchMedia("(max-width: 600px)").matches) {
			document.body.style.background = `rgba(0,0,0,0.2)url(${clearPhone})` ;
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundBlendMode = "darken";

		} else {
		document.body.style.background = `rgba(0,0,0,0.2)url(${clear})` ;
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundRepeat = "repeat-y";
		document.body.style.backgroundBlendMode = "darken";
	}
	}

  return (
    <div className="App">
			<BrowserRouter>
			<h1 id="main-title">
				Weather App
			</h1>
			<Navbar title="Weather"/>
			<Routes>
				<Route exact path="/" element={<Home/>} />
      	<Route exact path="/about" element={<About/>} />
        </Routes>
			<Footer id="footer"/>
			</BrowserRouter>
    </div>
  );
}

export default App;
