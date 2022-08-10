import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import rainy from  "./assets/rain.png";
import earth from "./assets/earth.jpg"


function App() {

	const [mode, setMode] = useState('light');

	const toggleMode = () => {
		if (mode === 'light') {
			setMode("rainy");
			console.log(mode);
			document.body.style.backgroundImage = `url(${rainy})`;
			
		}
		else {
			setMode("light");
			console.log(mode);
			document.body.style.backgroundImage = `url(${earth})` ;
		}
	}

	//let weather = "rainy";

	//let weatherBackground = () => { 
	//	if (weather==="rainy") {
	//			const myStyle={
	//				backgroundImage: `url(${rainy})` ,
	//				height:'100vh',
	//				marginTop:'-70px',
	//				//fontSize:'50px',
	//				backgroundSize: "cover",
	//				backgroundRepeat: 'no-repeat',
	//		};
	//		return myStyle;
	//	}
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
