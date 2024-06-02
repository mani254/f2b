import React from "react";
import ContainerSection from "./ContainerSection";

import { listIcon, pricingImage, hube, dpd, global, expressDelivery } from "../utils";

import IconList from "../components/IconList/IconList";

const listArray = ["Providing an independent advice and identifying the right fit for you, sourced and procured based on sol. Advice and identifying", "Providing an independent advice and identifying the right fit for you, sourced and procured based on sol. Advice and identifying"];
const logos = [hube, dpd, global, expressDelivery];
function PricingSection() {
	return (
		<ContainerSection className="pricing-section sec-padding">
			<div className="row justify-content-center">
				<div className="col-lg-11">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<img className="w-100" src={pricingImage} alt="f2d pricing ship image png" />
						</div>
						<div className="col-lg-7  px-5">
							<h2 className="sec-title mb-4">
								Our fleet covers your needs & <span>pricing range</span>
							</h2>
							<IconList listArray={listArray} icon={listIcon} />
						</div>
					</div>
					<div className="row g-5 mt-3">
						{logos.map((logo, index) => {
							return (
								<div className="col-lg-3" key={index}>
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
