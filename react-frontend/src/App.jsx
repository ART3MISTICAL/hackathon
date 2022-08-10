//import {useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import rainy from  "./assets/rain.png";
import cloudy from "./assets/cloud.jpg";
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

	//const [mode, setMode] = useState('cloudy');

	let weather = "rainy";

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
		//setMode("rainy");
		//console.log(mode);
		document.body.style.backgroundImage = `url(${rainy})`;
		document.body.style.backgroundSize = "1920px 1080px";
		document.body.style.backgroundRepeat = "no-repeat";
		//document.getElementById("main-title").style.color = "black";
		
	}
	else if (weather === 'cloudy') {
		//setMode("cloudy");
		//console.log(mode);
		document.body.style.backgroundImage = `url(${cloudy})` ;
		document.body.style.backgroundSize = "1920px 1080px";
		document.body.style.backgroundRepeat = "no-repeat";
		//document.getElementById("main-title").style.color = "white";
		//document.body.style.backgroundPositionY = "-150px"
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
				<Route exact path="/" element={<SearchBar/>} />
      	<Route path="/about" element={<About/>} />

        </Routes>
			<div className="container">
				
			</div>
			<Footer id="footer"/>
			</BrowserRouter>
    </div>
  );
}

export default App;
