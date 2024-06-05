import React, { useRef, useEffect } from "react";
import ContainerSection from "./ContainerSection";
import { aboutImage, videoIcon } from "../utils";
import { FaArrowRightLong } from "react-icons/fa6";
import "./css/About.css";
import Counter from "../components/Counter/Counter";
import ButtonLink from "../components/Button/ButtonLink.jsx";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function AboutSection() {
	const titleRef = useRef(null);
	const subTitleRef = useRef(null);
	const paragraphRef = useRef(null);
	const countersRef = useRef(null);
	const buttonRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

		tl.fromTo([titleRef.current, subTitleRef.current, paragraphRef.current, buttonRef.current], { opacity: 0, y: 60 }, { opacity: 1, y: 0, stagger: 0.3, duration: 0.5, ease: "ease-out" }).fromTo(countersRef.current.children, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0, duration: 0.6, ease: "ease-out" }, "-=0.5");

		ScrollTrigger.create({
			trigger: ".about-section",
			start: "top 60%",
			end: "bottom 30%",
			animation: tl,
			toggleActions: "play none none none",
		});
	}, []);

	return (
		<ContainerSection className="sec-padding about-section">
			<div className="row align-items-center">
				<div className="col-lg-5 d-none d-md-block">
					<div className="image-wrapper">
						<img className="contain" src={aboutImage} alt="about f2d" />
						<img className="video-icon" src={videoIcon} alt="video icon svg" />
					</div>
				</div>
				<div className="col-lg-7 pe-lg-5 pe-md-3">
					<p className="s-title" ref={titleRef}>
						Know About us
					</p>
					<h2 className="sec-title mt-3" ref={subTitleRef}>
						Specialists expedite imports through <span>customs clearance.</span>
					</h2>
					<p className="mt-3" ref={paragraphRef}>
						We strive to understand what they’re going through, what they need what their price points are, and what’s important to them and their customers.
						<br /> We connect with our customers
					</p>

					<div className="counter-wrapper d-flex mt-3" ref={countersRef}>
						<div className="s-counter">
							<h2>
								<Counter startValue={1000} endValue={5031} />
							</h2>
							<p>Delivery Packaged</p>
						</div>
						<div className="ms-5 s-counter">
							<h2>
								<Counter startValue={100} endValue={831} />
							</h2>
							<p>Satisfied Clients</p>
						</div>
					</div>

					<div className="mt-4" ref={buttonRef}>
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
