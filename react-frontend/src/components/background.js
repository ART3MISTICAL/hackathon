
	let weather = document.getElementById('plsWork').innerHTML;
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
