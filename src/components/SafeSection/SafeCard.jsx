import React from "react";
import "./SafeSection.css";

function SafeCard({ card, index }) {
	return (
		<div className={`card  card-${index}`}>
			<img src={card.image} alt="card.title" />
			<div className="content">
				<h3 className="text-center mb-2">{card.title}</h3>
				<p className="text-center">{card.content}</p>
			</div>
		</div>
	);
}

export default SafeCard;
