import React from "react";
import ContainerSection from "./ContainerSection";
import ButtonLink from "../components/Button/ButtonLink";
import "./css/Banner.css";

import { heroBackground, homeImage } from "../utils";
import { FaArrowRightLong } from "react-icons/fa6";

function BannerSection() {
	return (
		<ContainerSection className="h-banner">
			<div className="row align-items-center hero-main">
				<div className="col-lg-6 pe-5">
					<h1 className="heading">
						Shipping and logistics for business of all sizes From <span>Factory2Door</span>.
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
						<img src={homeImage}></img>
					</div>
				</div>
			</div>
			<img className="hero-background" src={heroBackground} alt="hero background svg" />
		</ContainerSection>
	);
}

export default BannerSection;
