import Card from "../../Shared/Card/Card";

const ClientsClock = ({
	clientClock,
	setClientClock,
	handelDelete,
	handelUpdateClient,
}) => {
	return (
		<div style={{ display: "flex", gap: "20px" }}>
			{clientClock.length === 0 ? <p>There has no clock | Please Add</p> : clientClock.map(client => (
				<Card
					key={client.id}
					clock={client}
					clientClock={clientClock}
					setClientClock={setClientClock}
					handelDelete={handelDelete}
					handelUpdateClient={handelUpdateClient}
				/>
			))}
		</div>
	);
};

export default ClientsClock;