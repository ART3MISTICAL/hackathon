import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Background from './components/background';
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

	Background()
	const myStyle={
		backgroundImage: `url(${rainy})` ,
		//height:'100vh',
		//marginTop:'-70px',
		//fontSize:'50px',
		backgroundSize: "cover",
		backgroundRepeat: 'no-repeat',
};


  return (
    <div className="App" style={myStyle}>
			<Navbar title="Weather" toggleMode={toggleMode}/>
			<div className="container">
				<SearchBar/>
			</div>
			<Footer/>
    </div>
  );
}

export default App;
