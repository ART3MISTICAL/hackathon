//import React from 'react';
import "../assets/rain.png";

let weather = "rainy";

export default function Background() {
	if (weather === "rainy") {
		document.body.style.backgroundImage = "rain.png";
	}
}