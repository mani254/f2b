import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ContainerSection from "../sections/ContainerSection.jsx";

import { safePackage, globalTracking, shipEveryWhere, support, onTimeDelivary } from "../utils/index.js";

import "./css/SpreadSection.css";

function SpreadSection() {
	const cardRef = useRef(null);
	useGSAP(() => {
		const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
		tl.fromTo(
			cardRef.current,
			{ y: 50 },
			{
				y: -40,
				scrollTrigger: {
					trigger: cardRef.current,
					start: "top 50%",
					end: "bottom 20%",
					scrub: 1.5,
				},
			}
		);
	}, []);

	return (
		<ContainerSection className="spread-sec">
			<div className="row justify-content-center">
				<div className="col-lg-8 mt-5">
					<div className="row px-0 px-md-3 g-3 g-md-5 g-lg-0 justify-content-center">
						<div className="col-12 col-md-10 col-lg-4 p-relative">
							<div className="content-card" ref={cardRef}>
								<p className="s-title">Why Choose Us</p>
								<h2 className="mt-2">We create an oppourtunity reach our potential</h2>
								<p className="mt-2">Logistics is a distinguished supply chain management firm which provides comprehensive solutions for warehousing, transportation and a host of logistics services</p>
							</div>
						</div>
						<div className="col-6 col-lg-4 d-none d-lg-block"></div>
						<div className="col-6 col-lg-4">
							<SpreadCard icon={safePackage} title="Safe Package" c="card-1" />
						</div>
						<div className="col-6 col-lg-4 d-none d-lg-block"></div>
						<div className="col-6 col-lg-4">
							<SpreadCard icon={globalTracking} title="Global Tracking" c="card-2" />
						</div>
						<div className="col-6 col-lg-4 d-none d-lg-block"></div>
						<div className="col-6 col-lg-4">
							<SpreadCard icon={shipEveryWhere} title="Ship Tracking" c="card-3" />
						</div>
						<div className="col-6 col-lg-4 d-none d-lg-block"></div>
						<div className="col-6 col-lg-4">
							<SpreadCard icon={support} title="24/7 Support" c="card-4" />
						</div>
						<div className="col-6 col-lg-4 d-none d-lg-block"></div>
						<div className="col-6 col-lg-4">
							<SpreadCard icon={onTimeDelivary} title="OntimeDelivary" c="card-5" />
						</div>
						<div className="col-6 col-lg-4 d-none d-lg-block"></div>
					</div>

					{/* <div className="row p-0">
						
					</div>

					<div className="row p-0">
						
					</div>

					<div className="row p-0">

					</div> */}
				</div>
			</div>
		</ContainerSection>
	);
}

function SpreadCard({ icon, title, c }) {
	const cardRef = useRef(null);
	useGSAP(() => {
		gsap.from(cardRef.current, {
			y: 80,
			scrollTrigger: {
				trigger: cardRef.current,
				start: "top 70%",
				end: "bottom 40%",
				scrub: 1,
			},
		});
	}, []);
	return (
		<div ref={cardRef} className={`spread-card ${c}`}>
			<img src={icon} alt="title" className="spread-icon" />
			<p className="spread-title">{title}</p>
		</div>
	);
}
export default SpreadSection;
