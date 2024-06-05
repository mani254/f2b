import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ContainerSection from "./ContainerSection";
import { aboutImage } from "../utils";

import "./css/LatestProject.css";

function LatestProjects() {
	const projectSectionRef = useRef(null);
	const sTitleRef = useRef(null);
	const secTitleRef = useRef(null);
	const progressBarsRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: projectSectionRef.current,
				start: "top 60%",
				end: "bottom top",
				toggleActions: "play none none reverse",
				// markers: true,
			},
		});

		tl.fromTo([sTitleRef.current, secTitleRef.current], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5 });

		progressBarsRefs.forEach((barRef, index) => {
			tl.fromTo(barRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, delay: index * 0.05 }, "-=0.8").to(barRef.current.querySelector(".progress"), { width: "100%", duration: 1 }, "-=0.5");
		});
	}, []);

	return (
		<ContainerSection className=" mt-5 sec-padding project-section">
			<div className="row align-items-center" ref={projectSectionRef}>
				<div className="col-lg-7 px-2 px-md-5">
					<p className="s-title" ref={sTitleRef}>
						Check Our Latest Projects
					</p>
					<h2 className="sec-title mt-3" ref={secTitleRef}>
						<span>Robust network </span> Powers seamless cross-border logistics.
					</h2>
					<div className="progress-container">
						<div className="progress-wrapper" ref={progressBarsRefs[0]}>
							<h4 className="mb-3">Supply Chain</h4>
							<div className="progress-bar">
								<span className="progress"></span>
							</div>
						</div>
						<div className="progress-wrapper" ref={progressBarsRefs[1]}>
							<h4 className="mb-3">Special Transport</h4>
							<div className="progress-bar">
								<span className="progress"></span>
							</div>
						</div>
						<div className="progress-wrapper" ref={progressBarsRefs[2]}>
							<h4 className="mb-3">Shipping Transport</h4>
							<div className="progress-bar">
								<span className="progress"></span>
							</div>
						</div>
						<div className="progress-wrapper" ref={progressBarsRefs[3]}>
							<h4 className="mb-3">Air Freight Solution</h4>
							<div className="progress-bar">
								<span className="progress"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-5 d-none d-md-block">
					<div className="image-wrapper mt-4 mt-lg-0">
						<img className="contain" src={aboutImage} alt="about f2d" />
					</div>
				</div>
			</div>
		</ContainerSection>
	);
}

export default LatestProjects;
