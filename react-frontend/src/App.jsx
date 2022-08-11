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
import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";



function App() {

	//const [mode, setMode] = useState('cloudy');

	let weather = "clear";

	//const toggleMode = () => {
	//	if (weather === 'rainy') {
	//		setMode("rainy");
	//		//console.log(mode);
	//		document.body.style.backgroundImage = `url(${rainy})`;
	//		document.body.style.backgroundSize = "1920px 1080px";
	//		document.body.style.backgroundRepeat = "no-repeat";
	//		document.getElementById("main-title").style.color = "black";
			
	//	}
	//	else if (weather === 'cloudy') {
	//		setMode("cloudy");
	//		//console.log(mode);
	//		document.body.style.backgroundImage = `url(${cloudy})` ;
	//		document.body.style.backgroundSize = "1920px 1080px";
	//		document.body.style.backgroundRepeat = "no-repeat";
	//		document.getElementById("main-title").style.color = "white";
	//		//document.body.style.backgroundPositionY = "-150px"
	//	}
	//}
	
	if (weather === 'rainy') {
		if (window.matchMedia("(max-width: 600px)").matches) {
			document.body.style.backgroundImage = `url(${rainyPhone})`;
			document.body.style.backgroundSize = "500px 1700px";
			document.body.style.backgroundRepeat = "no-repeat";		
		} else {
			document.body.style.background = `rgba(0,0,0,0.6)url(${rainy})`;
			document.body.style.backgroundSize = "1920px 1080px";
			document.body.style.backgroundRepeat = "repeat-y";
			document.body.style.backgroundBlendMode = "darken";
		}
		//setMode("rainy");
		//console.log(mode);

		//document.getElementById("main-title").style.color = "black";
		
	}
	else if (weather === 'cloudy') {
		if (window.matchMedia("(max-width: 600px)").matches) {
			document.body.style.background = `rgba(0,0,0,0.6)url(${cloudyPhone})` ;
			document.body.style.backgroundSize = "600px 1000px";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundBlendMode = "darken";

		//setMode("cloudy");
		//console.log(mode);

		//document.getElementById("main-title").style.color = "white";
		//document.body.style.backgroundPositionY = "-150px"
		} else {
		document.body.style.background = `rgba(0,0,0,0.6)url(${cloudy})` ;
		document.body.style.backgroundSize = "1920px 1080px";
		document.body.style.backgroundRepeat = "repeat-y";
		document.body.style.backgroundBlendMode = "darken";

	}
	}

	else if (weather === 'sunny') {
		if (window.matchMedia("(max-width: 600px)").matches) {
			document.body.style.background = `rgba(0,0,0,0.6)url(${sunnyPhone})` ;
			document.body.style.backgroundSize = "600px 979px";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundBlendMode = "darken";
		//setMode("cloudy");
		//console.log(mode);

		//document.getElementById("main-title").style.color = "white";
		//document.body.style.backgroundPositionY = "-150px"
		} else {
		document.body.style.background = `rgba(0,0,0,0.6)url(${sunny})` ;
		document.body.style.backgroundSize = "1920px 1080px";
		document.body.style.backgroundRepeat = "repeat-y";
		document.body.style.backgroundBlendMode = "darken";
	}
	}
	
	else if (weather === 'clear') {
		if (window.matchMedia("(max-width: 600px)").matches) {
			document.body.style.background = `rgba(0,0,0,0.6)url(${clear})` ;
			document.body.style.backgroundSize = "600px 979px";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundBlendMode = "darken";
		//setMode("cloudy");
		//console.log(mode);

		//document.getElementById("main-title").style.color = "white";
		//document.body.style.backgroundPositionY = "-150px"
		} else {
		document.body.style.background = `rgba(0,0,0,0.6)url(${clear})` ;
		document.body.style.backgroundSize = "1920px 1080px";
		document.body.style.backgroundRepeat = "repeat-y";
		document.body.style.backgroundBlendMode = "darken";
	}
	}

	//setMode("earth")
	//const background = () => {
	//	if (mode === 'rainy') {
	//		console.log(mode);
	//		document.body.style.backgroundImage = `url(${rainy})`;
	//		document.body.style.backgroundSize = "1920px 1080px";
	//		document.body.style.backgroundRepeat = "no-repeat";
			
	//	}
	//	else {
	//		console.log(mode);
	//		document.body.style.backgroundImage = `url(${earth})` ;
	//		document.body.style.backgroundSize = "1920px 1080px";
	//		document.body.style.backgroundRepeat = "no-repeat";
	//	}
	//}

	//background()

	//let weather = "rainy";

	//let myStyle={
	//	backgroundImage: `url(${rainy})` ,
	//	height:'100vh',
	//	marginTop:'-70px',
	//	//fontSize:'50px',
	//	backgroundSize: "cover",
	//	backgroundRepeat: 'no-repeat',
	//}

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
			<div className="container">
				
			</div>
			<Footer id="footer"/>
			</BrowserRouter>
    </div>
  );
}

export default App;
