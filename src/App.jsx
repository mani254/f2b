import React from "react";
import Navbar from "./components/Navbar/Navbar";
import BannerSection from "./sections/BannerSection";
import BookingSection from "./sections/BookingSection";

import "./App.css";
const App = () => {
	return (
		<div className="App">
			<Navbar />
			<BannerSection />
			<BookingSection />
		</div>
	);
};

export default App;
