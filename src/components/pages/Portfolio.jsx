import React, { useState } from 'react';
import { portfolio } from '../data/dummydata';
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Heading from '../common/Heading';

const allCategory = ['Todos', ...new Set(portfolio.map((item) => item.category))]

const Portfolio = () => {

	const [list, setList] = useState(portfolio)
	const [category, setCategory] = useState(allCategory)
	console.log(setCategory)

	const filterItems = (category) => {
		const newItems = portfolio.filter((item) => item.category === category)
		setList(newItems)

		if(category === "Todos") {
			setList(portfolio)
		}
	}

	return (
		<>
			<article>
				<div className="container">
					<Heading title="Portfolio" />
					<div className="catButton">
						{category.map((category) => (
							<button className="primaryBtn" onClick={() => filterItems(category)}>
								{category}
							</button>
						))}
					</div>
					<div className="content grid3">
						{list.map((items) => (
							<div className="box">
								<div className="img">
									<img src={items.cover} alt="" />
								</div>
								<div className="overlay">
									<h3>{items.title}</h3>
									<span>{items.name}</span>
									<VisibilityOutlinedIcon />
								</div>
							</div>
						))}
					</div>
				</div>
			</article>
		</>
	)
}

export default Portfolio