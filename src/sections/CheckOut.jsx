import React from "react";
import ContainerSection from "./ContainerSection";
import "./css/CheckOutServices.css";

import { flight, van, train, ship } from "../utils/index.js";

function CheckOut() {
	return (
		<ContainerSection className="sec-padding checkout-section">
			<div className="bar">
				<div className="info-wrapper">
					<span>3Quanity</span>
					<span>100kg</span>
					<span>3Quanity</span>
					<span>100 x 100 x 100 cm</span>
					<span>Edit</span>
				</div>
				<div className="tabs-wrapper d-flex mt-5 align-items-center">
					<div className="tab1 tab active d-flex align-items-center">
						<p>.</p>All
					</div>
					<div className="tab2 tab d-flex align-items-center">
						<img src={flight} alt="" className="icon" />
						<p>Air Fright</p>
					</div>
					<div className="tab3 tab d-flex align-items-center">
						<img src={van} alt="" className="icon" />
						<p>Road Fright</p>
					</div>
					<div className="tab4 tab d-flex align-items-center">
						<img src={ship} alt="" className="icon" />
						<p>Water Fright</p>
					</div>
					<div className="tab4 tab d-flex align-items-center">
						<img src={train} alt="" className="icon" />
						<p>Train Fright</p>
					</div>
				</div>
			</div>
		</ContainerSection>
	);
}

export default CheckOut;
