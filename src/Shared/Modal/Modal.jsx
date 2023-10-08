/** @format */

import React, { useState } from "react";
import Text from "../../UI/Text";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Select from "../../UI/Select";

const INTI = {
	title: "",
	timeZone: "",
	offset: "",
};
const Modal = ({ setModalOpen, handelSubmit }) => {
	const [formValue, setFormValue] = useState( {...INTI} );

	const handelChange = e => {
		const { name, value } = e.target;
		console.log(name)

		setFormValue({ ...formValue, [name]: value });
	};


	console.log(formValue)
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				e.stopPropagation();
				handelSubmit(formValue);
				setModalOpen(false);
			}}
		>
			<div
				// onClick={() => setModalOpen(false)}
				style={{
					width: "100vw",
					height: "100vh",
					position: "fixed",
					inset: "0",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: "#00000045",
				}}
			>
				<div
					style={{
						width: "20%",
						minHeight: "40%",
						border: "1px solid black",
						background: "#fff",
						padding: "5px 8px",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}
				>
					<div>
						<Text>Update OWN Clock</Text>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<Input
							name={"title"}
							onChange={handelChange}
							value={formValue.name}
							placeholder='Title'
						/>
						<Select
							name='timeZone'
							onChange={handelChange}
							value={formValue.timeZone}
						>
							<option>Select Your Time Zone</option>
							<option value={"UTC"}>UTC</option>
							<option value={"PST"}>PST</option>
						</Select>
						<Select
							name='offset'
							onChange={handelChange}
							value={formValue.offset}
						>
							<option>Select Your Time Offset</option>
							<option value={1}>+1</option>
							<option value={2}>+2</option>
							<option value={3}>+3</option>
							<option value={4}>+4</option>
							<option value={5}>+5</option>
							<option value={6}>+6</option>
							<option value={-1}>-1</option>
							<option value={-2}>-2</option>
							<option value={-3}>-3</option>
							<option value={-4}>-4</option>
							<option value={-5}>-5</option>
							<option value={-6}>-6</option>
						</Select>
					</div>
					<div style={{ display: "flex", gap: "5px" }}>
						<Button
							onClick={e => {
								e.stopPropagation();
								setModalOpen(false);
							}}
							color='white'
							bgColor='#ff0000'
						>
							Cancel
						</Button>
						<Button
							type='submit'
							bgColor='skyblue'
						>
							Save
						</Button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Modal;
