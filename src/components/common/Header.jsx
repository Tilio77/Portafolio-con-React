import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header>
				<div className="container flexsb">
					<div className="logo">
						<img src={logo} />
					</div>
					<div className="nav">
						<Link to=""></Link>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header