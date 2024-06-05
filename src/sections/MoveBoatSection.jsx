import React, { useRef, useEffect } from "react";
import Section from "./Section";
import { boatImage } from "../utils";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function MoveBoatSection() {
	const boatRef = useRef(null);
	const boatSectionRef = useRef(null);

	useGSAP(() => {
		const viewportWidth = window.innerWidth;
		const startValue = viewportWidth < 762 ? "top 50%" : "top 0%";
		const endValue = viewportWidth < 762 ? "bottom 0%" : "bottom 0%";

		gsap.to(boatRef.current, {
			x: "-140%",
			rotation: 20,
			scrollTrigger: {
				trigger: boatSectionRef.current,
				start: startValue,
				end: endValue,
				scrub: 1.5,
				// markers: true,
			},
		});
	}, []);

	useEffect(() => {
		console.log(boatSectionRef);
	}, []);
	return (
		<Section className="boat-section">
			<div className="boat-wrapper" ref={boatSectionRef}>
				<img ref={boatRef} src={boatImage} alt="boat or ship png image" />
			</div>
		</Section>
		// <Section className="boat-section">
		// 	<div className="boat-wrapper">
		// 		<img src={boatImage} alt="boat or ship png image" />
		// 	</div>
		// </Section>
	);
}

export default MoveBoatSection;
