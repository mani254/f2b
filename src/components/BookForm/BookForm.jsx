import React, { useState, useEffect } from "react";

import { TelInput, SelectInput, NumberInput } from "../FormComponents/FormComponents";
import Button from "../Button/Button";

import { AiFillDelete } from "react-icons/ai";

import "./BookForm.css";

function formSubmit(e) {
	console.log("formsubmit function ");
}

const fromOptions = ["option-1", "option-2", "option-3", "option-4", "option-5", "option-6", "option-7"];
const toOptions = ["option-1", "option-2", "option-3", "option-4", "option-5", "option-6", "option-7"];

function BookForm() {
	const [itemData, setItemData] = useState({ from: { country: "", pincode: null }, to: { country: "", pincode: null } });
	// const quantityData = useState({ quantity: 30, weightType: 80, weight: 60, width: 50, height: 100, len: 90 });
	const [itemsInfo, setItemsInfo] = useState([{ quantity: null, weightType: null, weight: null, width: null, height: null, len: null }]);

	function addOne() {
		setItemsInfo((prev) => [...prev, { quantity: null, weightType: null, weight: null, width: null, height: null, len: null }]);
	}

	function removeObject(index) {
		setItemsInfo((prevItems) => prevItems.filter((item, i) => i !== index));
	}

	function handleInputChange(index, event) {
		console.log(event.target.name, event.target.value);
		setAllItemsInfo((prev) => {
			const updatedItems = [...prev];

			updatedItems[index] = {
				...updatedItems[index],
				[event.target.name]: event.target.value,
			};
			return updatedItems;
		});
	}

	function handleLocationChange(event) {
		const { name, value } = event.target;
		const [location, field] = name.split(".");

		setItemData((prevItemData) => ({
			...prevItemData,
			[location]: {
				...prevItemData[location],
				[field]: value,
			},
		}));
	}

	return (
		<div className="form-wrapper">
			<form onSubmit={formSubmit}>
				<div className="first-three d-flex align-items-start">
					<SingleBlock title="From:" select={<FromSelect value={itemData.from.country} name="from.country" onChange={handleLocationChange} />} input={<FromInput name="from.pincode" value={itemData.from.pincode} onChange={handleLocationChange} />} />
					<SingleBlock title="To:" select={<ToSelect name="to.country" value={itemData.to.country} onChange={handleLocationChange} />} input={<ToInput name="to.pincode" value={itemData.to.pincode} onChange={handleLocationChange} />} />
				</div>
				<div>
					{itemsInfo.map((singleItem, index) => {
						return (
							<div className="blocks-wrapper mt-4" key={index}>
								<div className="last-three d-block d-sm-flex align-items-center p-relative">
									<div className="d-flex">
										<SingleBlock title="Quantity:" input={<QuantityInput value={singleItem.quantity} onChange={(event) => handleInputChange(index, event)} name="quantity" />} />
										<SingleBlock title={null} select={<WeightOptions />} input={<WeightInput value={singleItem.weightType} onChange={(event) => handleInputChange(index, event)} name="weightType" />} />
									</div>
									<div className="d-flex mt-2 mt-sm-0">
										<SingleBlock title="Width:" input={<WidthInput value={singleItem.width} onChange={(event) => handleInputChange(index, event)} name="width" />} />
										<SingleBlock title="Height:" input={<HeightInput value={singleItem.height} onChange={(event) => handleInputChange(index, event)} name="height" />} />
										<SingleBlock title="Length" input={<LengthInput value={singleItem.len} onChange={(event) => handleInputChange(index, event)} name="len" />} />
									</div>

									<span className="delete-icon" onClick={() => removeObject(index)}>
										<AiFillDelete />
									</span>
								</div>
							</div>
						);
					})}
					<div className="add-icon d-flex align-items-center justify-content-center mt-3" onClick={addOne}>
						+
					</div>
				</div>

				<div className="mt-1">
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	);
}

function SingleBlock({ title = null, select = null, input }) {
	return (
		<div className="single-block">
			<div className="top d-flex align-items-center">
				<span className={`${title && "me-2"}`}>{title}</span> {select}
			</div>
			<div className="bottom mt-2">{input}</div>
		</div>
	);
}

function FromSelect({ ...props }) {
	return <SelectInput options={fromOptions} {...props}></SelectInput>;
}

function FromInput({ ...props }) {
	return <TelInput placeholder="Enter Number" {...props} />;
}

function ToSelect({ ...props }) {
	return <SelectInput options={toOptions} {...props}></SelectInput>;
}

function ToInput({ ...props }) {
	return <TelInput placeholder="Enter Number" {...props} />;
}

function QuantityInput({ ...props }) {
	return <NumberInput placeholder="1" {...props} />;
}

function WeightOptions() {
	return (
		<div className="d-flex align-items-center justify-content-between">
			<div className="radio-wrapper d-flex">
				<input type="radio" id="weight" name="weightType" value="weight" />
				<label className="ms-1" htmlFor="weight">
					Weight
				</label>
			</div>

			<div className="radio-wrapper d-flex ms-2">
				<input type="radio" id="cbm" name="weightType" value="cbm" />
				<label className="ms-1" htmlFor="cbm">
					CBM
				</label>
			</div>
		</div>
	);
}

function WeightInput({ ...props }) {
	return (
		<div className="has-unit">
			<NumberInput placeholder="20" {...props} />
			<span>Kg</span>
		</div>
	);
}

function WidthInput({ ...props }) {
	return (
		<div className="has-unit">
			<NumberInput placeholder="20" {...props} />
			<span>CM</span>
		</div>
	);
}

function HeightInput({ ...props }) {
	return (
		<div className="has-unit">
			<NumberInput placeholder="20" {...props} />
			<span>CM</span>
		</div>
	);
}

function LengthInput({ ...props }) {
	return (
		<div className="has-unit">
			<NumberInput placeholder="20" {...props} />
			<span>CM</span>
		</div>
	);
}

export default BookForm;
