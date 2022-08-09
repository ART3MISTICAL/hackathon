import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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

  return (
    <div className="App">
			<Navbar title="Hackathon" toggleMode={toggleMode}/>
			<Footer/>
    </div>
  );
}

export default App;
