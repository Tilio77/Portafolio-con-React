import React from 'react'
import { social } from '../data/dummydata';

const Footer = () => {
	return (
		<>
			<footer>
				{social.map((item) => (
					<>
						<i>{item.icon}</i>
					</>
				))}
				<p>Todos los derechos reservados 2023</p>
			</footer>
		</>
	)
}

export default Footer