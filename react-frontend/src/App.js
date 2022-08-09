import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
	const [mode, setMode] = useState('light');
  return (
    <div className="App">
			<Navbar title="Hackathon"/>
    </div>
  );
}

export default App;
