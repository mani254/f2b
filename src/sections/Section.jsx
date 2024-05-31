import React from "react";

function Section({ children, ...props }) {
	return (
		<section {...props}>
			<div className="full-width">{children}</div>
		</section>
	);
}

export default Section;
