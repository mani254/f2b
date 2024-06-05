import React from "react";
import Section from "./Section";
import { TextInput } from "../components/FormComponents/FormComponents";
import Button from "../components/Button/Button";

import "./css/CallToAction.css";

function CallToAction() {
	return (
		<Section className="cta mt-5 d-flex align-items-center justify-content-center">
			<h2 className="sec-title mb-3 text-center">Subscribe</h2>
			<p className="mb-3 text-center">Our Expertise as well as our passion for webdesign sets us agncieso</p>
			<form className="sub-form p-relative">
				<TextInput variant="variant-2" placeholder="Email Address"></TextInput>
				<Button>Subscribe</Button>
			</form>
		</Section>
	);
}

export default CallToAction;
