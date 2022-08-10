import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import rainy from  "./assets/rain.png";


function App() {

	const [mode, setMode] = useState('light');

	const toggleMode = () => {
		if (mode === 'light') {
			setMode("dark");
			console.log(mode)
			document.body.style.backgroundColor = '#151516';
		}
		else {
			setMode("light");
			console.log(mode)
			document.body.style.backgroundColor = 'white';
		}
	}

	let weather = "rainy";

	let weatherBackground = () => { 
		if (weather==="rainy") {
				const myStyle={
					backgroundImage: `url(${rainy})` ,
					height:'100vh',
					marginTop:'-70px',
					//fontSize:'50px',
					backgroundSize: "cover",
					backgroundRepeat: 'no-repeat',
			};
			return myStyle;
		}
	}

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
