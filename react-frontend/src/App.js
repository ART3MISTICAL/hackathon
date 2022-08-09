import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
	const [mode, setMode] = useState('light');

	const toggleMode = () => {
		if (mode === 'light') {
			setMode("dark");
			console.log(mode)
		}
		else {
			setMode("light");
			console.log(mode)
		}
	}

  return (
    <div className="App">
			<Navbar title="Hackathon" toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
