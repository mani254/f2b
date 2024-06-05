import React from "react";

import CallToAction from "../sections/CallToAction";
import Footer from "../components/Footer/Footer";
import CheckOutServices from "../sections/CheckOutServices";
import CheckOut from "../sections/CheckOut";

function CheckOutPage() {
	return (
		<>
			{/* <Navbar /> */}
			<CheckOut />
			<CheckOutServices />
			<CallToAction />
			<Footer />
		</>
	);
}

export default CheckOutPage;
