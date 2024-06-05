import React, { useRef } from "react";
import ContainerSection from "./ContainerSection";

import { listIcon, pricingImage, hube, dpd, global, expressDelivery } from "../utils";

import IconList from "../components/IconList/IconList";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./css/PricingSection.css";

const listArray = ["Providing an independent advice and identifying the right fit for you, sourced and procured based on sol. Advice and identifying", "Providing an independent advice and identifying the right fit for you, sourced and procured based on sol. Advice and identifying"];
const logos = [hube, dpd, global, expressDelivery];

function PricingSection() {
	const pricingSection = useRef(null);
	const sTitle = useRef(null);
	const iconList = useRef(null);

	useGSAP(() => {
		const section = pricingSection.current;
		const title = sTitle.current;
		const icons = iconList.current.children;

		const tl = gsap.timeline({ paused: true });

		tl.from(title, { opacity: 0, y: 50, duration: 0.5 }).from(icons, { opacity: 0, y: 50, stagger: 0.2, duration: 0.5, ease: "ease-out" }, "-=0.3");

		ScrollTrigger.create({
			trigger: section,
			start: "top 70%",
			end: "bottom 20%",
			toggleActions: "play none none none",
			animation: tl,
			// markers: true,
		});
	}, []);

	return (
		<ContainerSection className="pricing-section sec-padding">
			<div className="row justify-content-center" ref={pricingSection}>
				<div className="col-lg-11">
					<div className="row align-items-center">
						<div className="col-lg-5 order-2 order-lg-1 mt-4 mt-md-0">
							<img className="w-100" src={pricingImage} alt="f2d pricing ship image png" />
						</div>
						<div className="col-lg-7 px-3 px-md-0 order-1 order-lg-2">
							<h2 className="sec-title mb-4" ref={sTitle}>
								Our fleet covers your needs & <span>pricing range</span>
							</h2>
							<IconList listArray={listArray} icon={listIcon} refValue={iconList} />
						</div>
					</div>
					<div className="row g-3 g-md-0 mt-0 mt-md-4 ">
						{logos.map((logo, index) => {
							return (
								<div className="col-lg-3 col-6" key={index}>
									<LogoBox logo={logo} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</ContainerSection>
	);
}

function LogoBox({ logo }) {
	return (
		<div className="logo-box">
			<img src={logo} alt="client-company-logo" />
		</div>
	);
}
export default PricingSection;
