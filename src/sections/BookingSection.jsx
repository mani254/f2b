import React from "react";
import ContainerSection from "./ContainerSection";
import BookForm from "../components/BookForm/BookForm";

import "./css/Booking.css";
function BookingSection() {
	return (
		<ContainerSection className="booking">
			<BookForm></BookForm>
		</ContainerSection>
	);
}

export default BookingSection;
