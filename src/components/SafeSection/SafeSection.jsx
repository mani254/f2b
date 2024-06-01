import React, { useRef } from "react";
import ContainerSection from "../../sections/ContainerSection";
import "./SafeSection.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SafeCard from "./SafeCard.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const cardData = [
	{ title: "Air Freight", content: "Wherever your cargo we can arrange the shipment for you and remain competitive" },
	{ title: "Ship Freight", content: "Wherever your cargo we can arrange the shipment for you and remain competitive" },
	{ title: "Road Transport", content: "Wherever your cargo we can arrange the shipment for you and remain competitive" },
	{ title: "Railway Logistic", content: "Wherever your cargo we can arrange the shipment for you and remain competitive" },
	{ title: "Heavy Transport", content: "Wherever your cargo we can arrange the shipment for you and remain competitive" },
];

function SafeSection() {
	const navigationPrevRef2 = React.useRef(null);
	const navigationNextRef2 = React.useRef(null);

	return (
		<ContainerSection className="safe-section sec-padding">
			<h2 className="sec-title mb-4 text-center">
				Safe & Reliable <span>Cargo Solutions</span>
			</h2>

			<div className="cards-wrapper p-relative">
				<div className="custom-navigation d-flex align-items-center justify-content-between">
					<span ref={navigationPrevRef2}>
						<FaArrowLeft />
					</span>
					<span ref={navigationNextRef2}>
						<FaArrowRight />
					</span>
				</div>

				<Swiper
					modules={[Navigation, A11y, Autoplay]}
					spaceBetween={10}
					slidesPerView={4}
					navigation={{
						prevEl: navigationPrevRef2.current,
						nextEl: navigationNextRef2.current,
					}}
					loop={true}
					autoplay={{ delay: 2000, disableOnInteraction: false }}
					breakpoints={{
						480: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
					}}>
					{cardData.map((card, index) => (
						<SwiperSlide key={index}>
							<SafeCard card={card} index={index} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</ContainerSection>
	);
}

export default SafeSection;
