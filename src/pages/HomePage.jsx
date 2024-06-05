import React from "react";
// import Navbar from "../components/Navbar/Navbar";
import BannerSection from "../sections/BannerSection";
import BookingSection from "../sections/BookingSection";
import AboutSection from "../sections/aboutSection";
import SafeSection from "../components/SafeSection/SafeSection";
import ShippingSection from "../sections/ShippingSection";
import SpreadSection from "../sections/SpreadSection";
import MoveBoatSection from "../sections/MoveBoatSection";
import Section from "../sections/Section";
import LatestProjects from "../sections/LatestProjects";
import SpecializeSection from "../sections/SpecializeSection.jsx";
import PricingSection from "../sections/PricingSection.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Blog from "../sections/Blog.jsx";
import CallToAction from "../sections/CallToAction.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomePage = () => {
	return (
		<>
			{/* <Navbar /> */}
			<BannerSection />
			<BookingSection />
			<AboutSection />
			<SafeSection />
			<ShippingSection />
			<Section className="ship-section background-cover mt-5"></Section>
			<SpreadSection />
			<MoveBoatSection />
			<LatestProjects />
			<SpecializeSection />
			<PricingSection />
			<Testimonials />
			<Blog />
			<CallToAction />
			<Footer />
		</>
	);
};

export default HomePage;
