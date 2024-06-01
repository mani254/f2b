import React from "react";
import Navbar from "./components/Navbar/Navbar";
import BannerSection from "./sections/BannerSection";
import BookingSection from "./sections/BookingSection";
import AboutSection from "./sections/aboutSection";
import SafeSection from "./components/SafeSection/SafeSection";
import ShippingSection from "./sections/ShippingSection";

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
			<ContainerSection className="sec-padding"></ContainerSection>
		</div>
	);
};

export default App;
