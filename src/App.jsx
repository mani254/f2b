import React, { useEffect } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CheckOutPage from "./pages/CheckOutPage.jsx";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<>
			<Navbar />
			<SmoothScroll>
				<div className="App">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/checkOut" element={<CheckOutPage />} />
					</Routes>
				</div>
			</SmoothScroll>
		</>
	);
};

export default App;
