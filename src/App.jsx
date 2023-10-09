/** @format */

import { useState } from "react";
import ClientsClock from "./Components/ClientsClock/ClientsClock";
import LocalClock from "./Components/LocalClock/LocalClock";
import shortid from "shortid";

const LOCAL_CLOCK_INTI = {
	title: "LOCAL CLOCK",
	timeZone: "",
	offset: 0,
	id: "ownClock",
};

const CLIENT_CLOCK_INIT = [];

const EVENT_INIT = [];

const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INTI });
	const [clientClock, setClientClock] = useState([...CLIENT_CLOCK_INIT]);
	const [events, setEvents] = useState([...EVENT_INIT]);

	// const [clockEvent, setClockEvent] = useState([])

	// events functions
	const handelEvent = eventInfo => {
		const eventId = shortid.generate();
		setEvents([...events, { ...eventInfo, eventId }]);
	};

	const handelEventDelete = eventId => {
		const newEvent = events.filter(event => event.eventId !== eventId)

		setEvents([...newEvent])
	}
	
	// clock functions
	const handelDelete = clockId => {
		const existClock = clientClock.filter(clock => clock.id !== clockId);
		const existEvent = events.filter(event => event.clockId !== clockId);
		setClientClock(existClock);
		setEvents(existEvent)
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
	const handelUpdateLocal = formValue => {
		setLocalClock({
			...localClock,
			...formValue,
		});
	};

	const handelAdd = newClient => {
		setClientClock([...clientClock, newClient]);
	};
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
				handelEvent={handelEvent}
				handelEventDelete={handelEventDelete}
			/>

			<div style={{ marginTop: "30px", display: "flex", width: "100vw" }}>
				<ClientsClock
					clientClock={clientClock}
					setClientClock={setClientClock}
					handelDelete={handelDelete}
					handelUpdateClient={handelUpdateClient}
					events={events}
					handelEvent={handelEvent}
					handelEventDelete={handelEventDelete}
				/>
			</div>
		</div>
	);
};

export default App;
