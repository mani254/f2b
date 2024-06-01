// Button.js
import React from "react";
import "./Button.css";

const Button = ({ variant, onClick, children,...props }) => {
	return (
		<button className={`button ${variant}`} onClick={onClick} {...props}>
			{children}
		</button>
	);
};

export default Button;
