/** @format */

import { useState } from "react";
import ClientsClock from "./Components/ClientsClock/ClientsClock";
import LocalClock from "./Components/LocalClock/LocalClock";
import useGetTime from "./hooks/useGetTime";

const LOCAL_CLOCK_INTI = {
	title: "LOCAL CLOCK",
	timeZone: "",
	offset: 0,
	id:'ownClock'
};

const CLIENT_CLOCK_INIT = [
	{
		title: "LOCAL CLOCK",
		timeZone: "",
		offset: 0,
		id:1
	},
];

const EVENT_INIT = [
	{
		eventId: 1,
		eventTitle: "This is Event",
		eventStartTime: 10.1,
		eventEndTime: 10.1,
		clockId: 1,
	},
	{
		eventId: 2,
		eventTitle: "This is Event seocond",
		eventStartTime: 10.1,
		eventEndTime: 10.1,
		clockId: 2,
	},
	{
		eventId: 3,
		eventTitle: "This is Event third",
		eventStartTime: 10.1,
		eventEndTime: 10.1,
		clockId: 2,
	},
	{
		eventId: 4,
		eventTitle: "This is Own Event",
		eventStartTime: 10.1,
		eventEndTime: 10.1,
		clockId: "ownClock",
	},
];

const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INTI });
	const [clientClock, setClientClock] = useState([...CLIENT_CLOCK_INIT]);
	const [events, setEvents] = useState([...EVENT_INIT]);
	
	// const [clockEvent, setClockEvent] = useState([])


	// events functions
	const handelFilterEvents = (clockId) => {
		// const ce = events.filter(evetn => evetn.if === clockId);
		// setEvents(ce)
	};



	// clock functions 
	const handelDelete = clockId => {
		const existClock = clientClock.filter(clock => clock.id !== clockId);
		setClientClock(existClock);
	};
	const handelUpdateClient = value => {
		const updateClock = clientClock.map(clock => {
			if (clock.id === value.id) {
				return value;
			}
			return clock;
		});

		setClientClock([...updateClock]);
	};
	const handelUpdateLocal = (formValue) => {
		setLocalClock({
			...localClock,
			...formValue,
		});
	}

	const handelAdd = (newClient) => {
		setClientClock([...clientClock, newClient])
	}
	return (
		<div>
			<LocalClock
				clock={localClock}
				setLocalClock={setLocalClock}
				clientClock={clientClock}
				setClientClock={setClientClock}
				handelUpdateLocal={handelUpdateLocal}
				handelAdd={handelAdd}
				events={events}
			/>

			<div style={{ marginTop: "30px", display: "flex", width: "100vw" }}>
				<ClientsClock
					clientClock={clientClock}
					setClientClock={setClientClock}
					handelDelete={handelDelete}
					handelUpdateClient={handelUpdateClient}
					events={events}
				/>
			</div>
		</div>
	);
};

export default App;
