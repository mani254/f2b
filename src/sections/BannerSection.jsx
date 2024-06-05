import React, { useState, useEffect, useMemo } from "react";
import ContainerSection from "./ContainerSection";
import ButtonLink from "../components/Button/ButtonLink";
import "./css/Banner.css";

import { heroBackground, homeImage } from "../utils";
import { FaArrowRightLong } from "react-icons/fa6";
import LazyLoad from "react-lazyload";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const headings = [
	{ heading: "Shipping and logistics for business of all sizes From", span: "Factory2Door" },
	{ heading: "Streamline Your Supply Chain with TransAll", span: "Logistics Solutions" },
	{ heading: "Reliable Transport Services for Any Material with", span: "MaterialMover" },
	{ heading: "Efficient Shipping Solutions for Every Cargo with", span: "CargoFlex Logistics" },
];

function BannerSection() {
	const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
	const [isFading, setIsFading] = useState(true);

	useEffect(() => {
		const timer = setInterval(() => {
			setIsFading(false);
			setTimeout(() => {
				setIsFading(true);
				setCurrentHeadingIndex((prevIndex) => (prevIndex === headings.length - 1 ? 0 : prevIndex + 1));
			}, 700);
		}, 4000);

		return () => clearInterval(timer);
	}, []);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.from(".btns-wrapper>*", {
			opacity: 0,
			y: 50,
			duration: 1,
			delay: 0.5,
			stagger: 0.5,
			ease: "power3.out",
		});

		return () => {
			tl.kill();
		};
	}, []);

	const currentHeading = useMemo(() => headings[currentHeadingIndex], [currentHeadingIndex]);

	return (
		<ContainerSection className="h-banner">
			<div className="row align-items-center hero-main pb-5">
				<div className="col-lg-6 pe-md-5">
					<h1 className={`heading ${isFading ? "fade-heading" : ""}`}>
						{currentHeading.heading}
						<span> {currentHeading.span}</span>.
					</h1>

					<div className="d-flex btns-wrapper mt-4">
						<ButtonLink>
							<span>Get a Quote</span>
							<div className="icon arrow">
								<FaArrowRightLong />
							</div>
						</ButtonLink>
						<ButtonLink variant="variant-1">
							<span> Global Tracking</span>
							<div className="icon arrow">
								<FaArrowRightLong />
							</div>
						</ButtonLink>
					</div>
				</div>
				<div className="col-lg-6 p-3 p-relative">
					<div className="video-wrapper">
						<LazyLoad>
							<img src={homeImage} alt="Home" />
						</LazyLoad>
					</div>
				</div>
			</div>
			<img className="hero-background" src={heroBackground} alt="hero background svg" />
		</ContainerSection>
	);
}

export default BannerSection;
