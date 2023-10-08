import { useState } from "react";
import ClientsClock from "./Components/ClientsClock/ClientsClock";
import LocalClock from "./Components/LocalClock/LocalClock";
import useGetTime from "./hooks/useGetTime";

const LOCAL_CLOCK_INTI = {
	title: 'LOCAL CLOCK',
	timeZone: "",
	offset: 0
	
}

const CLIENT_CLOCK_INIT = [
	{
		id: 1,
		title: "Client Clock 1",
		timeZone: "",
		offset: 0,
	},
];
const App = () => {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INTI })
	const [clientClock, setClientClock] =useState([...CLIENT_CLOCK_INIT])
	

	return (
		<div>
			<LocalClock
				clock={localClock}
				setLocalClock={setLocalClock}
			/>

			<div style={{marginTop:'30px', display:'flex', width:'100vw'}}>
				<ClientsClock
					clientClock={clientClock}
					setClientClock={setClientClock}
				/>
			</div>
		</div>
	);
};

export default App;