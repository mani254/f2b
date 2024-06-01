import React from "react";
import Navbar from "./components/Navbar/Navbar";
import BannerSection from "./sections/BannerSection";
import BookingSection from "./sections/BookingSection";
import AboutSection from "./sections/aboutSection";
import SafeSection from "./components/SafeSection/SafeSection";
import ShippingSection from "./sections/ShippingSection";
import SpreadSection from "./sections/SpreadSection";
import MoveBoatSection from "./sections/MoveBoatSection";
import Section from "./sections/Section";

import "./App.css";
import ContainerSection from "./sections/ContainerSection";
const App = () => {
	return (
		<div className="App">
			<Navbar />
			<BannerSection />
			<BookingSection />
			<AboutSection />
			<SafeSection />
			<ShippingSection />
			<Section className="ship-section background-cover mt-5"></Section>
			<SpreadSection />
			<MoveBoatSection />

			<ContainerSection className="sec-padding "></ContainerSection>
		</div>
	);
};

export default App;
