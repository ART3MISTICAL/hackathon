import React from 'react';
import SearchBar from './SearchBar';

export default function Home() {
	return(
		<>
			<div className="container">
				<SearchBar />
			</div>
			<div className="container">
				<p id="temp">
					15°c
				</p>
				<p id="weather">
					Cloudy
				</p>
				<p id="place">
					Delhi, India
				</p>
			</div>
		</>
	);
}