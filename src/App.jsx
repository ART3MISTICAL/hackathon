//import {useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
//import SearchBar from './components/SearchBar';
import About from './components/About';
import Home from './components/Home';

import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import Contact from './components/Contact';



function App() {

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
				<Route exact path="/contact-us" element={<Contact/>} />
        </Routes>
			<Footer id="footer"/>
			</BrowserRouter>
    </div>
  );
}

export default App;
