import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaArrowRightLong } from "react-icons/fa6";
import LazyLoad from "react-lazyload";

import ContainerSection from "./ContainerSection";
import ButtonLink from "../components/Button/ButtonLink";
import { ShippingImage } from "../utils";

import "./css/ShippingSection.css";

function ShippingSection() {
	const headingRef = useRef(null);
	const subHeadingRef = useRef(null);
	const imageRef = useRef(null);
	const buttonRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({ defaults: { ease: "ease-out" } });

		tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
		tl.fromTo(subHeadingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.3");
		tl.fromTo(imageRef.current, { opacity: 0, scale: 0.2, duration: 0.6, delay: 0 }, { opacity: 1, scale: 1 }, "-=0.3");
		tl.fromTo(buttonRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=0.3");

		ScrollTrigger.create({
			trigger: ".shipping-sec",
			start: "top 60%",
			end: "bottom 30%",
			animation: tl,
			toggleActions: "play none none none",
		});
	}, []);

	return (
		<ContainerSection className="shipping-sec sec-padding">
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-10">
					<h2 className="sec-title mb-3 text-center" ref={headingRef}>
						<span>LCL Shipping </span>From Anywhere In The World
					</h2>
					<p className="text-center mb-4" ref={subHeadingRef}>
						Want the savings of Sea Freight but can't fill a full container? Here's our colourful guide to LCL shipping:
					</p>
					<div className="image-wrapper" ref={imageRef}>
						{/* <LazyLoad> */}
						<img className="contain" src={ShippingImage} alt="shipping image gif" />
						{/* </LazyLoad> */}
					</div>
					<div className="mt-4 d-flex justify-content-center" ref={buttonRef}>
						<ButtonLink>
							<span>Read More</span>
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

export default ShippingSection;
