import Card from "../../Shared/Card/Card";

const ClientsClock = ({ clientClock, setClientClock }) => {
	
    return (
		<div>
			{clientClock.map(client => (
				<Card
					key={client.id}
					clock={client}
					clientClock={clientClock}
					setClientClock={setClientClock}
				/>
			))}
		</div>
	);
};

export default ClientsClock;