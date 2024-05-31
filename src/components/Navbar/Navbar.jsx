import React from "react";
import "./Navbar.css";
import ButtonLink from "../Button/ButtonLink.jsx";
import TextLink from "../Button/TextLink.jsx";
import { logo } from "../../utils";

const links = [
	{ name: "Home", to: "#" },
	{ name: "About", to: "#" },
	{ name: "Services", to: "#" },
	{ name: "Contact", to: "#" },
];

function Navbar() {
	return (
		<header>
			<nav className="container">
				<img className="logo" src={logo} alt="factory to door logo" />
				<ul className="nav-links">
					{links.map((link, index) => (
						<li key={index}>
							<TextLink to={link.to}>{link.name}</TextLink>
						</li>
					))}
					<li>
						<ButtonLink to="signin">Sign In</ButtonLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
