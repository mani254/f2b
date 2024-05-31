// ButtonLink.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

const ButtonLink = ({ to = "#", variant, children, ...props }) => {
	return (
		<NavLink to={to} className={`button ${variant}`} {...props}>
			{children}
		</NavLink>
	);
};

export default ButtonLink;
