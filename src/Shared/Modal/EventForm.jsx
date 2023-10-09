/** @format */

import { useState } from "react";
import Text from "../../UI/Text";
import Button from "../../UI/Button";

const EVENT_FORM_INIT = {
	eventTitle: "",
	eventStartTime: "",
	eventEndTime: "",
};

const EventForm = ({
	isUpdate,
	seteventModalOpen,
	handelEvent,
	clockId,
	handelUpdateEvent,
	eventId,
}) => {
	const [state, setState] = useState({ ...EVENT_FORM_INIT });
	const handelOnChange = e => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				e.stopPropagation();
				!isUpdate && handelEvent({ clockId, ...state });
				isUpdate && handelUpdateEvent({ clockId, ...state, eventId });
				seteventModalOpen(false);
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
						<Text>{isUpdate ? "Update" : "Add New"} Event</Text>
					</div>
					<div
						style={{
							padding: "10px",
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<div>
							<label htmlFor='eventTitle'>Event Title</label>
							<input
								type='text'
								name='eventTitle'
								id='eventTitle'
								value={state.eventTitle}
								style={{ width: "100%" }}
								onChange={handelOnChange}
							/>
						</div>

						<div>
							<label htmlFor='eventStartTime'>Event Title</label>
							<input
								type='time'
								name='eventStartTime'
								id='eventStartTime'
								value={state.eventStartTime}
								onChange={handelOnChange}
							/>
						</div>
						<div>
							<label htmlFor='eventEndTime'>Event Title</label>
							<input
								type='time'
								name='eventEndTime'
								id='eventEndTime'
								value={state.eventEndTime}
								onChange={handelOnChange}
							/>
						</div>

						<div style={{ display: "flex", gap: "5px" }}>
							<Button
								onClick={e => {
									e.stopPropagation();
									seteventModalOpen(false);
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
			</div>
		</form>
	);
};
export default EventForm;
