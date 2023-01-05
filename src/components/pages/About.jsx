import React from 'react';
import { about } from '../data/dummydata'; 
import Heading from '../common/Heading';

const About = () => {
	return (
		<>
			<section className="about">
				<div className="container flex">
					{about.map((val,i) => (
						<>
							<div className="left">
								<img src={val.cover} alt="" data-aos="fade-down-right" />
							</div>
							<div className="right" data-aos="fade-down-left">
								<Heading title="Acerca de mí" />
								<p>{val.desc}</p>
								<p>{val.desc1}</p>
								<button>Descargar CV</button>
								<button className="primaryBtn">Descargar CV</button>
							</div>
						</>
					))}
				</div>
			</section>
		</>
	)
}

export default About