import React from "react";
import "./css/SpecializeSection.css";

import Counter from "../components/Counter/Counter";

import ContainerSection from "./ContainerSection";
import { flightImage } from "../utils";
function SpecializeSection() {
	return (
		<ContainerSection className="spec-section sec-padding">
			<div className="row justify-content-center">
				<div className="col-lg-11">
					<p className="s-title text-center">We Specialize Transportation</p>
					<h2 className="sec-title mt-3 text-center">
						<span>We have </span> challenges covered
					</h2>
					<div className="spec-counters row">
						<div className="col-lg-3">
							<div className="s-counter">
								<h2 className="text-center">
									<Counter startValue={1000} endValue={5031} duration={2} />
								</h2>
								<p className="text-center">Delivary Packaged</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="s-counter">
								<h2 className="text-center">
									<Counter startValue={1000} endValue={5031} duration={2} />
								</h2>
								<p className="text-center">Delivary Packaged</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="s-counter">
								<h2 className="text-center">
									<Counter startValue={1000} endValue={5031} duration={2} />
								</h2>
								<p className="text-center">Delivary Packaged</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="s-counter">
								<h2 className="text-center">
									<Counter startValue={1000} endValue={5031} duration={2} />
								</h2>
								<p className="text-center">Delivary Packaged</p>
							</div>
						</div>
						<div className="flight-image">
							<img src={flightImage} alt="moving flight img" />
						</div>
					</div>
				</div>
			</div>
		</ContainerSection>
	);
}

export default SpecializeSection;
