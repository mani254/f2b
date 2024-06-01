import React from "react";
import ContainerSection from "./ContainerSection";

import { aboutImage, videoIcon } from "../utils";
import { FaArrowRightLong } from "react-icons/fa6";

import "./css/About.css";
import Counter from "../components/Counter/Counter";
import ButtonLink from "../components/Button/ButtonLink.jsx";

function AboutSection() {
	return (
		<ContainerSection className="sec-padding about-section">
			<div className="row align-items-center">
				<div className="col-lg-5">
					<div className="image-wrapper">
						<img className="contain" src={aboutImage} alt="about f2d" />
						<img className="video-icon" src={videoIcon} alt="video icon svg" />
					</div>
				</div>
				<div className="col-lg-7 pe-lg-5 pe-md-3">
					<p className="s-title">Know About us</p>
					<h2 className="sec-title mt-3">
						Specialists expedite imports through <span>customs clearance.</span>
					</h2>
					<p className="mt-3">
						We strive to understand what they’re going through, what they need what their price points are, and what’s important to them and their customers.
						<br /> We connect with our customers
					</p>

					<div className="counter-wrapper d-flex mt-3">
						<div className="s-counter">
							<h2>
								<Counter startValue={1000} endValue={5031} duration={2} />
							</h2>
							<p>Delivary Packaged</p>
						</div>
						<div className="ms-5 s-counter">
							<h2>
								<Counter startValue={100} endValue={831} duration={2} />
							</h2>
							<p>Satisfied Clients</p>
						</div>
					</div>

					<div className="mt-4">
						<ButtonLink>
							<span>Explore More</span>
							<div className="icon arrow">
								<FaArrowRightLong />
							</div>
						</ButtonLink>
					</div>
				</div>
			</div>
		</ContainerSection>
	);
}

export default AboutSection;
