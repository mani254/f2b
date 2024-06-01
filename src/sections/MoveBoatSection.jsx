import React from "react";
import Section from "./Section";
import { boatImage } from "../utils";
function MoveBoatSection() {
	return (
		<Section className="boat-section">
			<div className="boat-wrapper">
				<img src={boatImage} alt="boat or ship png image" />
			</div>
		</Section>
	);
}

export default MoveBoatSection;
