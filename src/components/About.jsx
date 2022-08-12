import React from 'react';

export default function About() {
	return (
		<div className="container text-box">
			<h1 className='text'>About The Website</h1>
			<p className='text'>
			This website is a tool for people who need to track weather forcasts and currect conditions of the climate as they update in real time.
			</p>
			<p className='text'>
			This App tells you the-
			<ul>
				<li>
					Temperature 
				</li>
				<li>
					Weather condition
				</li>
			</ul>
			</p>
			<h1 className="text">
				About Us
			</h1>
			<p className="text">
			Developed by Devansh Arora and  Aryan Saraf [DPS Faridabad, Sec-19] in less than 2 days as a hackathon project.
We both have great interest in coding and believe that the future ahead truly depends on code and Tech.
			</p>
		</div>
	);
}