import React, { useRef } from "react";
import "./css/SpecializeSection.css";

import Counter from "../components/Counter/Counter";

import ContainerSection from "./ContainerSection";
import { flightImage } from "../utils";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

function SpecializeSection() {
	const sectionRef = useRef(null);
	const flightImageRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 20%",
				end: "bottom 20%",
				scrub: 1,
				ease: "ease-in-out",
				// markers: true,
			},
		});

		tl.to(flightImageRef.current, { x: "290%" });
	});
	return (
		<ContainerSection className="spec-section sec-padding">
			<div className="row justify-content-center" ref={sectionRef}>
				<div className="col-lg-11 p-0">
					<p className="s-title text-center">We Specialize Transportation</p>
					<h2 className="sec-title mt-3 text-center">
						<span>We have </span> challenges covered
					</h2>
					<div className="spec-counters row">
						<div className="col-lg-3 col-6">
							<div className="s-counter">
								<h2 className="text-center">
									<Counter startValue={1000} endValue={5031} duration={2} />
								</h2>
								<p className="text-center">Delivary Packaged</p>
							</div>
						</div>
						<div className="col-lg-3 col-6 second">
							<div className="s-counter">
								<h2 className="text-center">
									<Counter startValue={1000} endValue={5031} duration={2} />
								</h2>
								<p className="text-center">Delivary Packaged</p>
							</div>
						</div>
						<div className="col-lg-3 col-6">
							<div className="s-counter">
								<h2 className="text-center">
									<Counter startValue={1000} endValue={5031} duration={2} />
								</h2>
								<p className="text-center">Delivary Packaged</p>
							</div>
						</div>
						<div className="col-lg-3 col-6 last">
							<div className="s-counter">
								<h2 className="text-center">
									<Counter startValue={1000} endValue={5031} duration={2} />
								</h2>
								<p className="text-center">Delivary Packaged</p>
							</div>
						</div>
						<div className="flight-image">
							<img src={flightImage} alt="moving flight img" ref={flightImageRef} />
						</div>
					</div>
				</div>
			</div>
		</ContainerSection>
	);
}

export default SpecializeSection;
