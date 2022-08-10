import {useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import rainy from  "./assets/rain.png";
import earth from "./assets/earth.jpg"


function App() {

	const [mode, setMode] = useState('earth');

	const toggleMode = () => {
		if (mode === 'earth') {
			setMode("rainy");
			console.log(mode);
			document.body.style.backgroundImage = `url(${rainy})`;
			document.body.style.backgroundSize = "1920px 1080px";
			document.body.style.backgroundRepeat = "no-repeat";
			
		}
		else {
			setMode("earth");
			console.log(mode);
			document.body.style.backgroundImage = `url(${earth})` ;
			document.body.style.backgroundSize = "1920px 1080px";
			document.body.style.backgroundRepeat = "no-repeat";
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
			<Navbar title="Weather" toggleMode={toggleMode}/>
			<div className="container">
				<SearchBar/>
			</div>
			<Footer/>
    </div>
  );
}

export default App;
