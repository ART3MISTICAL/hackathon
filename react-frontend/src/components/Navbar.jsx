import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
	return(
		<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" id="navbar"> {/*fixed-top*/}
		<div className="container-fluid">
			<a className="navbar-brand" href="/">{props.title}</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<Link className="nav-link active" aria-current="page" to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">About us</Link>
					</li>
					{/*<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown
						</a>
						<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
							<li><a className="dropdown-item" href="/">Action</a></li>
							<li><a className="dropdown-item" href="/">Another action</a></li>
							<li><hr className="dropdown-divider"/></li>
							<li><a className="dropdown-item" href="/">Something else here</a></li>
						</ul>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
					</li>*/}
				</ul>
				<ul className="navbar-nav flex-row flex-wrap ms-md-auto">
					{/*<li>
						<div className="form-check form-switch text-light my-2">
  						<input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  						<label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="dark-mode-label">Dark Mode</label>
						</div>
					</li>*/}
					<li className="nav-item" id="contact">
						<a className="nav-link" href="/">Contact us</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	)
}

Navbar.propTypes = {
	title: PropTypes.string
}