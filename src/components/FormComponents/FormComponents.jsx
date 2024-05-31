import React from "react";

import "./FormComponents.css";

export function TextInput({ variant, ...props }) {
	return <input className={`text-input ${variant}`} type="text" {...props} />;
}

export function TelInput({ variant, ...props }) {
	return <input className={`number-input ${variant}`} type="tel" {...props} />;
}
export function NumberInput({ variant, ...props }) {
	return <input className={`number-input ${variant}`} type="number" {...props} />;
}

export function SelectInput({ variant, options, ...props }) {
	return (
		<select className={`select-input ${variant}`} {...props}>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
}
