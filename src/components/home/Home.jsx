import React from 'react';
import Hero from './Hero';
import About from '../pages/About';
import Services from "../pages/Services";
import Counter from "../pages/Counter";

const Home = () => {
	return (
		<div>
			<Hero />
			<About />
			<Services />
			<Counter />
		</div>
	)
}

export default Home