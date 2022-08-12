import React, { useState } from "react";
import axios from "axios";
import cloudyPhone from '../assets/earth2.png';
import rainyPhone from '../assets/rain2.png';
import sunny from '../assets/sunny.jpg';
import sunnyPhone from '../assets/sunny2.jpg';
import clear from '../assets/clear.jpg';
import clearPhone from '../assets/blue2.png';
import dust from '../assets/dust.jpg'
import dustPhone from '../assets/dust2.jpeg';
import rainy from  "../assets/rain.png";
import cloudy from "../assets/cloud.jpg";
//import SearchBar from './SearchBar';

export default function Home() {
	
	const [data, setData] = useState({})
	const [location, setLocation] = useState('')

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

	const searchLocation = (event) => {
	  if (event.key === 'Enter') {
		axios.get(url).then((response) => {
		  setData(response.data)
		  console.log(response.data)
			let weather = data.weather[0].main;

			if (weather === 'Rain') {
				if (window.matchMedia("(max-width: 600px)").matches) {
					document.body.style.backgroundImage = `url(${rainyPhone})`;
					document.body.style.backgroundSize = "cover";
					document.body.style.backgroundRepeat = "no-repeat";		
				} else {
					document.body.style.background = `rgba(0,0,0,0.2)url(${rainy})`;
					document.body.style.backgroundSize = "cover";
					document.body.style.backgroundRepeat = "repeat-y";
					document.body.style.backgroundBlendMode = "darken";
				}
				
			}
			else if (weather === 'Clouds') {
				if (window.matchMedia("(max-width: 600px)").matches) {
					document.body.style.background = `rgba(0,0,0,0.2)url(${cloudyPhone})` ;
					document.body.style.backgroundSize = "cover";
					document.body.style.backgroundRepeat = "no-repeat";
					document.body.style.backgroundBlendMode = "darken";
		
				} else {
				document.body.style.background = `rgba(0,0,0,0.2)url(${cloudy})` ;
				document.body.style.backgroundSize = "cover";
				document.body.style.backgroundRepeat = "repeat-y";
				document.body.style.backgroundBlendMode = "darken";
		
			}
			}
		
			else if (weather === 'Sun') {
				if (window.matchMedia("(max-width: 600px)").matches) {
					document.body.style.background = `rgba(0,0,0,0.2)url(${sunnyPhone})` ;
					document.body.style.backgroundSize = "cover";
					document.body.style.backgroundRepeat = "no-repeat";
					document.body.style.backgroundBlendMode = "darken";
		
				} else {
				document.body.style.background = `rgba(0,0,0,0.2)url(${sunny})` ;
				document.body.style.backgroundSize = "cover";
				document.body.style.backgroundRepeat = "repeat-y";
				document.body.style.backgroundBlendMode = "darken";
			}
			}
			
			else if (weather === 'Clear') {
				if (window.matchMedia("(max-width: 600px)").matches) {
					document.body.style.background = `rgba(0,0,0,0.2)url(${clearPhone})` ;
					document.body.style.backgroundSize = "cover";
					document.body.style.backgroundRepeat = "no-repeat";
					document.body.style.backgroundBlendMode = "darken";
		
				} else {
				document.body.style.background = `rgba(0,0,0,0.2)url(${clear})` ;
				document.body.style.backgroundSize = "cover";
				document.body.style.backgroundRepeat = "repeat-y";
				document.body.style.backgroundBlendMode = "darken";
			}
			}

			else if (weather === 'Dust') {
				if (window.matchMedia("(max-width: 600px)").matches) {
					document.body.style.background = `rgba(0,0,0,0.2)url(${dustPhone})` ;
					document.body.style.backgroundSize = "cover";
					document.body.style.backgroundRepeat = "no-repeat";
					document.body.style.backgroundBlendMode = "darken";
		
				} else {
				document.body.style.background = `rgba(0,0,0,0.2)url(${dust})` ;
				document.body.style.backgroundSize = "cover";
				document.body.style.backgroundRepeat = "repeat-y";
				document.body.style.backgroundBlendMode = "darken";
			}
			}
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
			<div className="container" id="weather-box">
				<p id="temp">
					{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
				</p>
				<p id="weather">
					{data.weather ? <p>{data.weather[0].main}</p> : null}
				</p>
				<p id="place">
					{data.name}
				</p>
			</div>
		</>
	);
}