import React from "react";
import ContainerSection from "../sections/ContainerSection.jsx";

import "./css/SpreadSection.css";

import { safePackage, globalTracking, shipEveryWhere, support, onTimeDelivary } from "../utils/index.js";

function SpreadSection() {
	return (
		<ContainerSection className="spread-sec">
			<div className="row justify-content-center">
				<div className="col-lg-8 mt-5">
					<div className="row p-0 g-0">
						<div className="col-lg-4 p-relative">
							<div className="content-card ">
								<p className="s-title">Why Choose Us</p>
								<h2 className="mt-2">We create an oppourtunity reach our potential</h2>
								<p className="mt-2">Logistics is a distinguished supply chain management firm which provides comprehensive solutions for warehousing, transportation and a host of logistics services</p>
							</div>
						</div>
						<div className="col-lg-4"></div>
						<div className="col-lg-4">
							<SpreadCard icon={safePackage} title="Safe Package" c="card-1" />
						</div>
					</div>

					<div className="row p-0">
						<div className="col-lg-4"></div>
						<div className="col-lg-4">
							<SpreadCard icon={globalTracking} title="Global Tracking" c="card-2" />
						</div>
						<div className="col-lg-4"></div>
					</div>

					<div className="row p-0">
						<div className="col-lg-4">
							<SpreadCard icon={shipEveryWhere} title="Ship Tracking" c="card-3" />
						</div>
						<div className="col-lg-4"></div>
						<div className="col-lg-4">
							<SpreadCard icon={support} title="24/7 Support" c="card-4" />
						</div>
					</div>

					<div className="row p-0">
						<div className="col-lg-4"></div>
						<div className="col-lg-4">
							<SpreadCard icon={onTimeDelivary} title="OntimeDelivary" c="card-5" />
						</div>
						<div className="col-lg-4"></div>
					</div>
				</div>
			</div>
		</ContainerSection>
	);
}

function SpreadCard({ icon, title, c }) {
	return (
		<div className={`spread-card ${c}`}>
			<img src={icon} alt="title" className="spread-icon" />
			<p className="spread-title">{title}</p>
		</div>
	);
}
export default SpreadSection;
