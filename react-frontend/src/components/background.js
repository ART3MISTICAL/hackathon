//import React from 'react';
import rainy from  "../assets/rain.png";

let weather = "rainy";

export default function Background() {
	if (weather === "rainy") {
		document.body.style.backgroundImage = rainy;
	}
}