/** @format */

import { useEffect, useState } from "react";
import ClientsClock from "./Components/ClientsClock/ClientsClock";
import LocalClock from "./Components/LocalClock/LocalClock";
import shortid from "shortid";
import useEvent from "./hooks/useEvent";

const LOCAL_CLOCK_INTI = {
	title: "LOCAL CLOCK",
	timeZone: "",
	offset: 0,
	id: "ownClock",
	date: null,
};

const CLIENT_CLOCK_INIT = [
	{
		title: "client CLOCK",
		timeZone: "",
		offset: 0,
		id: "c1",
	},
];

const EVENT_INIT = [];

const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INTI });
	const [clientClock, setClientClock] = useState([...CLIENT_CLOCK_INIT]);
	const [events, setEvents] = useState([...EVENT_INIT]);

	// const [clockEvent, setClockEvent] = useState([])

	// events functions
	const handelEvent = eventInfo => { //create new events
		const eventId = shortid.generate();
		setEvents([...events, { ...eventInfo, eventId }]);
	};

	const handelEventDelete = eventId => {
		const newEvent = events.filter(event => event.eventId !== eventId)

		setEvents([...newEvent])
	}

	const handelUpdateEvent = eventInfo => {

		console.log(eventInfo, ' aklsjdf')
		const newEvent = events.map(e => {
			if (e.eventId === eventInfo.eventId) {
				return eventInfo;
			} else {
				return e;
			}
		});

		setEvents([...newEvent]);
	};
	



	// clock functions
	const handelDelete = clockId => { //delete client clock
		const existClock = clientClock.filter(clock => clock.id !== clockId);
		const existEvent = events.filter(event => event.clockId !== clockId);
		setClientClock(existClock);
		setEvents(existEvent)
	};
	const handelUpdateClient = formValue => { // update client data
		console.log(formValue)
		const updateClock = clientClock.map(clock => {
			if (clock.id === formValue.id) {
				return formValue;
			}
			return clock;
		});

		setClientClock([...updateClock]);
	};


	const handelUpdateLocal = formValue => { //update local clock
		setLocalClock({
			...localClock,
			...formValue,
		});
	};

	const handelAdd = newClient => { // add new client 
		setClientClock([...clientClock, newClient]);
	};


	// event chekc 
	const { getEvent, getEventsByClockID, addEvent, event } = useEvent();

	

	useEffect(() => {
		if (Object.keys(event).length === 0) {
			addEvent({ title: "Test", clockId:'clock-111'})
		}
		// console.log('get all event', getEvent())
		// console.log('get all event', getEvent(true))
		// console.log("get all event", getEventsByClockID("clock-111"));
	} , [])



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
				handelUpdateEvent={handelUpdateEvent}
			/>

			<div style={{ marginTop: "30px", display: "flex", width: "100vw" }}>
				<ClientsClock
					clientClocks={clientClock}
					setClientClock={setClientClock}
					handelDelete={handelDelete}
					handelUpdateClient={handelUpdateClient}
					events={events}
					handelEvent={handelEvent}
					handelEventDelete={handelEventDelete}
					localClock={localClock}
					handelUpdateEvent={handelUpdateEvent}
				/>
			</div>
		</div>
	);
};

export default App;
