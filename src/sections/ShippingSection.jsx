import React from "react";
import ContainerSection from "./ContainerSection";
import { ShippingImage } from "../utils";
import "./css/ShippingSection.css";
import { FaArrowRightLong } from "react-icons/fa6";

import ButtonLink from "../components/Button/ButtonLink";

function ShippingSection() {
	return (
		<ContainerSection className="shipping-sec sec-padding">
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-10">
					<h2 className="sec-title mb-3 text-center">
						<span>LCL Shipping </span>From Anywhere In The World
					</h2>
					<p className="text-center mb-4">Want the savings of Sea Freight but can't fill a full container? Here's our colourful guide to LCL shipping:</p>
					<div className="image-wrapper">
						<img className="contain" src={ShippingImage} alt="shipping image gif" />
					</div>
					<div className="mt-4 d-flex justify-content-center">
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
