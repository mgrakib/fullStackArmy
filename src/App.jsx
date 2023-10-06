/** @format */

import "./App.css";
import SelectInput from "./Components/SelectInput";
import timeZones from "../public/timeZone.json";
import { useEffect, useState } from "react";
import { deepCopy } from "./utils/object";
import { timeConvert } from "./utils/timeConvert";
import DateComp from "./Components/DateComp";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";


const init = {
	ownTime: {
		name: "UTC+00:00",
		offset: 0,
		abbreviation: "UTC",
		country:'Bangladesh'
	},
	client1: { name: "UTC+00:00", offset: 0, abbreviation: "UTC" },
};

function App() {
	const [clockInfo, setClockInfo] = useState(deepCopy(init));
	const [modalOpen, setModalOpen] = useState(false)
	
	

	
	const convertTime = e => {
		const { name, value } = e.target;
		const info = timeZones.find(time => time.name === value);
		const oldState = deepCopy(clockInfo);
		oldState[name] = info;
		setClockInfo(oldState);
		
	};



	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					padding: "20px 0px",
				}}
			>
				<p>this is app</p>
				<div>
					<SelectInput
						name='ownTime'
						onChange={convertTime}
					>
						<option value=''>Select Your Time Zone</option>
						{timeZones.map(timeZone => (
							<option
								key={timeZone.name}
								value={timeZone.name}
							>
								{timeZone.name}
							</option>
						))}
					</SelectInput>

					<div style={{ marginTop: "20px" }}>
						{/* <p style={{ fontSize: "24px" }}>{ownTime}</p> */}
					</div>

					{/* own time  */}
					<DateComp info={clockInfo.ownTime} />

					<Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />

					<div style={{marginTop: '20px'}}>
							<Button onClick={() => setModalOpen(true)}>Add Client</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
