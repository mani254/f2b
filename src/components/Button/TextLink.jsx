// ButtonLink.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

const TextLink = ({ to, variant, children }) => {
	return (
		<NavLink to={to} className={`text-link ${variant}`}>
			{children}
		</NavLink>
	);
};

export default TextLink;
