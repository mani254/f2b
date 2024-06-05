import React, { useRef } from "react";
import ContainerSection from "./ContainerSection";
import "./css/Testimonials.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const testimonials = [
	{ name: "Manikanta", review: "I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person." },
	{ name: "Manikanta", review: "I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person." },
	{ name: "Manikanta", review: "I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person." },
	{ name: "Manikanta", review: "I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person." },
	{ name: "Manikanta", review: "I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person.I am an ambitious workaholic, but apart from that, pretty simple person." },
];
function Testimonials() {
	const sTitleRef = useRef(null);
	const secTitleRef = useRef(null);
	const sectionRef = useRef(null);
	const textRef = useRef(null);

	const navigationPrevRef2 = React.useRef(null);
	const navigationNextRef2 = React.useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 60%",
				end: "bottom top",
				toggleActions: "play none none none",
				// markers: true,
			},
		});

		tl.fromTo([sTitleRef.current, secTitleRef.current, sectionRef.current, textRef.current], { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 });
	}, []);

	return (
		<ContainerSection className="sec-padding testimonial-section">
			<div className="row align-items-center" ref={sectionRef}>
				<div className="col-lg-5">
					<p className="s-title" ref={sTitleRef}>
						Testimonials
					</p>
					<h2 className="sec-title mt-3" ref={secTitleRef}>
						What They are Talking <span>About The Company</span>
					</h2>
					<p className="mt-3" ref={textRef}>
						Providers of personal safety, comfort, and protection products for the outdoor enthusiast It has been our experience that Classic Transportation is in an elite
					</p>
				</div>
				<div className="col-lg-7 p-relative px-2 px-md-5 mt-4 mt-md-0">
					<Swiper
						modules={[Navigation, A11y, Autoplay]}
						spaceBetween={10}
						slidesPerView={1}
						navigation={{
							prevEl: navigationPrevRef2.current,
							nextEl: navigationNextRef2.current,
						}}
						loop={true}
						autoplay={{ delay: 4000, disableOnInteraction: false }}>
						{testimonials.map((testimonial, index) => (
							<SwiperSlide key={index}>
								<SingleTestimonial data={testimonial} />
							</SwiperSlide>
						))}
					</Swiper>
					<div className="custom-navigation d-flex align-items-center justify-content-between">
						<span ref={navigationPrevRef2}>
							<FaArrowLeft />
						</span>
						<span ref={navigationNextRef2}>
							<FaArrowRight />
						</span>
					</div>
				</div>
			</div>
		</ContainerSection>
	);
}

function SingleTestimonial({ data }) {
	return (
		<div className="s-testimonial">
			<p>{data.review}</p>
			<div className="d-flex justify-content-between align-items-center">
				<div className=" mt-3">
					<h6>{data.name}</h6>
					<div className="stars d-flex gx-1 mt-2">
						<div className="s-star active"></div>
						<div className="s-star active"></div>
						<div className="s-star active"></div>
						<div className="s-star active"></div>
						<div className="s-star active"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
