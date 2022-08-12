import React, { useState } from "react";
import axios from "axios";
//import cloudyPhone from '../assets/earth2.png';
//import rainyPhone from '../assets/rain2.png';
//import sunny from '../assets/sunny.jpg';
//import sunnyPhone from '../assets/sunny2.jpg';
//import clear from '../assets/clear.jpg';
//import clearPhone from '../assets/blue2.png';
//import dust from '../assets/dust.jpg'
//import dustPhone from '../assets/dust2.jpeg';
//import rainy from  "../assets/rain.png";
//import cloudy from "../assets/cloud.jpg";
//import SearchBar from './SearchBar';

export default function Home() {
	
	const [data, setData] = useState({});
	const [location, setLocation] = useState('');

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

	const searchLocation = (event) => {
	  if (event.key === 'Enter') {
		axios.get(url)
			.then((response) => {
		  setData(response.data);
		  //console.log(response.data);	
		})
				
					setLocation('')
	  
	}
		
	}

	return(
		<>
			<div className="container">
				<input 
					value={location}
					type="text" 
					className='search-bar' 
					placeholder='Search your city here'
					onChange={event => setLocation(event.target.value)} 
					onKeyPress={searchLocation}
				/>
			</div>
			<div className="container weather-box" >
				<div id="temp">
					{data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
				</div>
				<div id="weather">
					{data.weather ? <p id="pls work">{data.weather[0].main}</p> : <p>Enter Location in the search bar</p>}
				</div>

				<div id="place">
					{data.weather ? <p>{data.name}, {data.sys.country}</p> : null}
				</div>
			</div>
		</>
	);
}