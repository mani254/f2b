import React from "react";

function ContainerSection({ children, ...props }) {
	return (
		<section {...props}>
			<div className="container">{children}</div>
		</section>
	);
}

export default ContainerSection;
