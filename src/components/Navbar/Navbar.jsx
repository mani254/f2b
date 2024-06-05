import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ButtonLink from "../Button/ButtonLink.jsx";
import TextLink from "../Button/TextLink.jsx";
import { logo } from "../../utils";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const links = [
	{ name: "Home", to: "home" },
	{ name: "About", to: "about" },
	{ name: "Services", to: "services" },
	{ name: "Contact", to: "contact" },
];

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 35) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const closeNavbar = () => {
		if (isOpen) {
			setIsOpen(false);
		}
	};

	return (
		<header className={`${isSticky && "sticky"}`}>
			<nav className="container">
				<img className="logo" src={logo} alt="factory to door logo" />
				<ul className={`nav-links ${isOpen && "active"}`}>
					{links.map((link, index) => (
						<li key={index} onClick={closeNavbar}>
							<TextLink to={link.to}>{link.name}</TextLink>
						</li>
					))}
					<li>
						<ButtonLink to="signin">Sign In</ButtonLink>
					</li>
				</ul>
				<div
					className={`hamburger  ${isOpen && "active"}`}
					onClick={() => {
						setIsOpen(!isOpen);
					}}>
					<svg viewBox="0 0 32 32">
						<path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
						<path className="line" d="M7 16 27 16"></path>
					</svg>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
