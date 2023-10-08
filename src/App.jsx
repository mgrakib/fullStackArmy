/** @format */

import { useState } from "react";
import ClientsClock from "./Components/ClientsClock/ClientsClock";
import LocalClock from "./Components/LocalClock/LocalClock";
import useGetTime from "./hooks/useGetTime";

const LOCAL_CLOCK_INTI = {
	title: "LOCAL CLOCK",
	timeZone: "",
	offset: 0,
};

const CLIENT_CLOCK_INIT = [
	
];
const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INTI });
	const [clientClock, setClientClock] = useState([...CLIENT_CLOCK_INIT]);

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
			/>

			<div style={{ marginTop: "30px", display: "flex", width: "100vw" }}>
				<ClientsClock
					clientClock={clientClock}
					setClientClock={setClientClock}
					handelDelete={handelDelete}
					handelUpdateClient={handelUpdateClient}
				/>
			</div>
		</div>
	);
};

export default App;
