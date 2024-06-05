import React from "react";
import "./css/CheckOutServices.css";
import ContainerSection from "./ContainerSection.jsx";
import Button from "../components/Button/Button.jsx";
import { flight, van, train, ship } from "../utils/index.js";

const serviceInfo = [
	{ image: flight, name: "Air Fright", dayCount: "2-3 days", tillDate: "20-07-2024", price: "23,45.99", delivaryDate: "Mon 25th" },
	{ image: ship, name: " Water Fright", dayCount: "2-3 days", tillDate: "20-07-2024", price: "23,45.99", delivaryDate: "Mon 25th" },
	{ image: van, name: "Road Fright", dayCount: "2-3 days", tillDate: "20-07-2024", price: "23,45.99", delivaryDate: "Mon 25th" },
	{ image: train, name: "Train Fright", dayCount: "2-3 days", tillDate: "20-07-2024", price: "23,45.99", delivaryDate: "Mon 25th" },
];

function CheckOutServices() {
	return (
		<ContainerSection className="sec-padding mt-5 ">
			<p className="services-title mb-5">4 services found, from £6,061.02</p>
			<div className="row  gy-4 services-wrapper">
				{serviceInfo.map((service, index) => {
					return (
						<div className="col-lg-4 col-md-6" key={index}>
							<SingleService service={service} />
						</div>
					);
				})}
			</div>
		</ContainerSection>
	);
}

function SingleService({ service }) {
	return (
		<div className="single-service p-4">
			<div className="top d-flex justify-content-between align-items-center pb-3">
				<div className="d-flex align-items-center">
					<img className="service-icon me-4" src={service.image} alt={service.name} />
					<p className="day-count">{service.dayCount}</p>
				</div>
				<p className="till-date">Valid till {service.tillDate}</p>
			</div>
			<div className="details d-flex align-items-start py-4">
				<div className="price">
					<p className="type">{service.name}</p>
					<p className="value mt-2">{service.price}</p>
				</div>
				<div className="delivary ps-3">
					<p>Delivary On</p>
					<p className="date">{service.delivaryDate}</p>
				</div>
			</div>
			<div className="bottom d-flex justify-content-between align-items-center">
				<p>ETA: 30 hrs 30 min</p>
				<Button>Book Now</Button>
			</div>
		</div>
	);
}

export default CheckOutServices;
