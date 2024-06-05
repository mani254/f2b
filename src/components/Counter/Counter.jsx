import React, { useState, useEffect, useRef } from "react";

function Counter({ startValue, endValue, duration = 3 }) {
	const totalSteps = 100;
	const totalChange = endValue - startValue;
	const increment = totalChange / totalSteps;

	const [currentValue, setCurrentValue] = useState(startValue);
	const [counterStarted, setCounterStarted] = useState(false);
	const counterRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !counterStarted) {
					setCounterStarted(true);
					const startTime = Date.now();
					const endTime = startTime + duration * 1000;

					const updateInterval = setInterval(() => {
						const elapsedTime = Date.now() - startTime;
						const progress = elapsedTime / (endTime - startTime);

						if (progress >= 1) {
							setCurrentValue(endValue);
							clearInterval(updateInterval);
						} else {
							setCurrentValue(startValue + totalChange * progress);
						}
					}, duration * 10);

					return () => clearInterval(updateInterval);
				}
			});
		});

		observer.observe(counterRef.current);

		return () => observer.disconnect();
	}, [startValue, endValue, duration, totalChange, counterStarted]);

	return (
		<div ref={counterRef}>
			<span>{Math.round(currentValue)}</span>
		</div>
	);
}

export default Counter;
