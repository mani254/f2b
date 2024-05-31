import React, { useState } from "react";

import { TelInput, SelectInput, NumberInput } from "../FormComponents/FormComponents";
import Button from "../Button/Button";

import "./BookForm.css";

function formSubmit(e) {
	console.log("formsubmit function ");
}

const fromOptions = ["option-1", "option-2", "option-3", "option-4", "option-5", "option-6", "option-7"];
const toOptions = ["option-1", "option-2", "option-3", "option-4", "option-5", "option-6", "option-7"];

function BookForm() {
	const [itemData, setItemData] = useState({ from: { country: "", pincode: null }, to: { country: "", pincode: null }, quantity: null });
	const [singleItemInfo, setSingleItemInfo] = useState({ weightType: "", weight: "", width: "", height: "", length: "" });
	const [allItemsInfo, setAllItemsInfo] = useState([]);

	return (
		<form onSubmit={formSubmit}>
			<SingleBlock title="From:" select={<FromSelect />} input={<FromInput />}></SingleBlock>
			<SingleBlock title="To:" select={<ToSelect />} input={<ToInput />}></SingleBlock>
			<SingleBlock title="Quantity:" input={<QuantityInput />}></SingleBlock>
			<SingleBlock title={null} select={<WeightOptions />} input={<WeightInput />}></SingleBlock>
			<SingleBlock title="Width:" input={<WidthInput />}></SingleBlock>
			<SingleBlock title="Height:" input={<HeightInput />}></SingleBlock>
			<SingleBlock title="Length" input={<LengthInput />}></SingleBlock>
			<Button type="submit">Submit</Button>
		</form>
	);
}

function SingleBlock({ title = null, select = null, input }) {
	return (
		<div className="single-block">
			<div className="top d-flex align-items-center">
				<span className="me-2">{title}</span> {select}
			</div>
			<div className="bottom mt-2">{input}</div>
		</div>
	);
}

function FromSelect() {
	return <SelectInput options={fromOptions}></SelectInput>;
}

function FromInput() {
	return <TelInput placeholder="Enter Number" />;
}

function ToSelect() {
	return <SelectInput options={toOptions}></SelectInput>;
}

function ToInput() {
	return <TelInput placeholder="Enter Number" />;
}

function QuantityInput() {
	return <NumberInput placeholder="1" />;
}

function WeightOptions() {
	return (
		<div className="d-flex align-items-center justify-content-between">
			<div className="radio-wrapper d-flex">
				<input type="radio" id="weight" name="weightType" value="weight" />
				<label className="ms-2" htmlFor="weight">
					Weight
				</label>
			</div>

			<div className="radio-wrapper d-flex">
				<input type="radio" id="cbm" name="weightType" value="cbm" />
				<label className="ms-2" htmlFor="cbm">
					CBM
				</label>
			</div>
		</div>
	);
}

function WeightInput() {
	return (
		<div className="has-unit">
			<NumberInput placeholder="20" />
			<span>Kg</span>
		</div>
	);
}

function WidthInput() {
	return (
		<div className="has-unit">
			<NumberInput placeholder="20" />
			<span>CM</span>
		</div>
	);
}

function HeightInput() {
	return (
		<div className="has-unit">
			<NumberInput placeholder="20" />
			<span>CM</span>
		</div>
	);
}

function LengthInput() {
	return (
		<div className="has-unit">
			<NumberInput placeholder="20" />
			<span>CM</span>
		</div>
	);
}
export default BookForm;
