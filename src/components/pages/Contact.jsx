import React from 'react';
import Heading from '../common/Heading';
import { contact } from '../data/dummydata';

const Contact = () => {
	return (
		<>
			<div className="contact">
				<div className="container">
					<Heading title="Ponte en contacto" />
					<div className="content flexsb">
						<div className="right">
							<form>
								<div className="flex">
									<input type="text" placeholder="Nombre completo" />
									<input type="text" placeholder="Correo electrónico" />
								</div>
								<input type="text" placeholder="Asunto" />
								<textarea name="" id="" cols="30" placeholder="Escribe tu mensaje..." rows="10"></textarea>
								<button>Enviar</button>
							</form>
						</div>
						<div className="left">
							{contact.map((item) => (
								<div className="box">
									<i>{item.icon}</i>
									<p>{item.text1}</p>
									<p>{item.text2}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact