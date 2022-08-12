import React, { useState } from "react";
import axios from "axios";


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
					changeBackground()
	  
	}
	changeBackground()
		
	}

	//const [mode, setMode] = useState('');

	const changeBackground = () => {

		let weather = document.getElementById('plsWork').innerHTML;
		//let weather = data.weather[0].main;

		console.log(weather)
		//{/*//window.weather = data.weather[0].main;*/}
		if (weather === 'Rain') {
			document.body.className = 'app rain';
		}
		if (weather === 'Clouds') {
			document.body.className = 'app clouds';
		}
	
		if (weather === 'Sun') {
			document.body.className = 'app sun';
		}
		
		if (weather === 'Clear') {
			document.body.className = 'app clear';
		}
	
		if (weather === 'Dust') {
			document.body.className = 'app dust';
		}
		if (weather === 'Thunderstorm') {
			document.body.className = 'app thunder';
		}
		if (weather === 'Haze') {
			document.body.className = 'app haze'
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
			<p className="text">
				Click enter twice to change background 
			</p>
			<div className="container weather-box" >
				<div id="temp">
					{data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
				</div>
				<div id="weather">
					{data.weather ?  <p id="plsWork">{data.weather[0].main}</p> : <p id="plsWork">Enter Location in the search bar</p>}
				</div>
				
				<div id="place">
					{data.weather ? <p>{data.name}, {data.sys.country}</p> : null}
				</div>
				
			</div>
		</>
	);
}