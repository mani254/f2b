// src/Counter.js

import React, { useState, useEffect } from "react";

function Counter({ startValue, endValue, duration }) {
	const totalSteps = 100; // Define how many steps you want in the total duration
	const increment = Math.round((endValue - startValue) / totalSteps); // Calculate the increment and round to nearest integer
	const stepDuration = duration / totalSteps; // Calculate the step duration

	const [currentValue, setCurrentValue] = useState(startValue);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentValue((prevValue) => {
				const newValue = prevValue + increment;
				if ((increment > 0 && newValue >= endValue) || (increment < 0 && newValue <= endValue)) {
					clearInterval(interval);
					return endValue;
				}
				return newValue;
			});
		}, stepDuration);

		return () => clearInterval(interval);
	}, [startValue, endValue, increment, stepDuration]);

	return (
		<>
			<span>{Math.round(currentValue)}</span>
		</>
	);
}

export default Counter;
