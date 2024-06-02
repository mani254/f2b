import React from "react";
import ContainerSection from "./ContainerSection";
import { aboutImage } from "../utils";

import "./css/LatestProject.css";

function LatestProjects() {
	return (
		<ContainerSection className=" mt-5 sec-padding project-section">
			<div className="row">
				<div className="col-lg-7 px-5">
					<p className="s-title">Check Our Latest Projects</p>
					<h2 className="sec-title mt-3">
						<span>Robust network </span> Powers seamless cross-border logisticks.
					</h2>
					<div className="progress-container">
						<div className="progress-wrapper">
							<h4 className="mb-3">Supply Chain</h4>
							<div className="progress-bar">
								<span className="progress"></span>
							</div>
						</div>
						<div className="progress-wrapper">
							<h4 className="mb-3">Special Transport</h4>
							<div className="progress-bar">
								<span className="progress"></span>
							</div>
						</div>
						<div className="progress-wrapper">
							<h4 className="mb-3">Shipping Transport</h4>
							<div className="progress-bar">
								<span className="progress"></span>
							</div>
						</div>
						<div className="progress-wrapper">
							<h4 className="mb-3">Air Fright Solution</h4>
							<div className="progress-bar">
								<span className="progress"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-5">
					<div className="image-wrapper">
						<img className="contain" src={aboutImage} alt="about f2d" />
					</div>
				</div>
			</div>
		</ContainerSection>
	);
}

export default LatestProjects;
