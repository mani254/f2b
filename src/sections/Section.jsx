import React from "react";

function Section({ children, ref, ...props }) {
	return (
		<section ref={ref} {...props}>
			<div className="full-width">{children}</div>
		</section>
	);
}

export default Section;
