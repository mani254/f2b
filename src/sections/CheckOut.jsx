import React, { useState, useEffect } from "react";
import ContainerSection from "./ContainerSection";
import "./css/CheckOutServices.css";
import CheckOutServices from "./CheckOutServices.jsx";
import { flight, van, train, ship } from "../utils/index.js";

const serviceInfo = [
	{ image: flight, name: "Air Fright", dayCount: "2-3 days", tillDate: "20-07-2024", price: "23,45.99", delivaryDate: "Mon 25th" },
	{ image: ship, name: "Water Fright", dayCount: "2-3 days", tillDate: "20-07-2024", price: "23,45.99", delivaryDate: "Mon 25th" },
	{ image: van, name: "Road Fright", dayCount: "2-3 days", tillDate: "20-07-2024", price: "23,45.99", delivaryDate: "Mon 25th" },
	{ image: train, name: "Train Fright", dayCount: "2-3 days", tillDate: "20-07-2024", price: "23,45.99", delivaryDate: "Mon 25th" },
];

function CheckOut() {
	const [activeTab, setActiveTab] = useState("all");
	const [selected, setSelected] = useState(serviceInfo);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	useEffect(() => {
		if (activeTab === "all") {
			setSelected(serviceInfo);
		} else {
			const filtered = serviceInfo.filter((service) => {
				if (activeTab === "air" && service.name === "Air Fright") return true;
				if (activeTab === "road" && service.name === "Road Fright") return true;
				if (activeTab === "water" && service.name === "Water Fright") return true;
				if (activeTab === "train" && service.name === "Train Fright") return true;
				return false;
			});
			setSelected(filtered);
		}
	}, [activeTab]);

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
				<div className="tabs-container">
					<div className="tabs-wrapper d-flex mt-3 mt-md-0 mt-md-0 align-items-center">
						<div className={`tab1 tab d-flex align-items-center ${activeTab === "all" ? "active" : ""}`} onClick={() => handleTabClick("all")}>
							<p>.</p>All
						</div>
						<div className={`tab2 tab d-flex align-items-center ${activeTab === "air" ? "active" : ""}`} onClick={() => handleTabClick("air")}>
							<img src={flight} alt="" className="icon" />
							<p>Air Fright</p>
						</div>
						<div className={`tab3 tab d-flex align-items-center ${activeTab === "road" ? "active" : ""}`} onClick={() => handleTabClick("road")}>
							<img src={van} alt="" className="icon" />
							<p>Road Fright</p>
						</div>
						<div className={`tab4 tab d-flex align-items-center ${activeTab === "water" ? "active" : ""}`} onClick={() => handleTabClick("water")}>
							<img src={ship} alt="" className="icon" />
							<p>Water Fright</p>
						</div>
						<div className={`tab5 tab d-flex align-items-center ${activeTab === "train" ? "active" : ""}`} onClick={() => handleTabClick("train")}>
							<img src={train} alt="" className="icon" />
							<p>Train Fright</p>
						</div>
					</div>
				</div>
			</div>
			<CheckOutServices selected={selected} />
		</ContainerSection>
	);
}

export default CheckOut;
