import ClientsClock from "./Components/ClientsClock/ClientsClock";
import LocalClock from "./Components/LocalClock/LocalClock";
import useGetTime from "./hooks/useGetTime";

const App = () => {
	const {
		clock: localClock,
		timeZoneValue,
		offsetValue,
		
	} = useGetTime();
	
	

	return (
		<div>
			{localClock !== null && (
				<LocalClock
					date={localClock}
					timeZone={timeZoneValue}
					offset={offsetValue}
				/>
			)}
			<ClientsClock />
		</div>
	);
};

export default App;