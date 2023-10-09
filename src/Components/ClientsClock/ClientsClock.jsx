import { useState } from "react";
import Card from "../../Shared/Card/Card";
import Modal from "../../Shared/Modal/Modal";
import ClientClockCard from "./ClientClockCard";

const ClientsClock = ({
	clientClocks,
	handelDelete,
	handelUpdateClient,
	localClock,
	handelEvent,
	handelEventDelete,
	handelUpdateEvent,
	events,
}) => {
	return (
		<div>
			<div style={{ display: "flex", gap: "20px" }}>
				{clientClocks.map(clock => (
					<ClientClockCard
						key={clock.id}
						clock={clock}
						handelUpdateClient={handelUpdateClient}
						handelDelete={handelDelete}
						localClock={localClock}
						handelEvent={handelEvent}
						handelEventDelete={handelEventDelete}
						handelUpdateEvent={handelUpdateEvent}
						events={events}
					/>
				))}
			</div>
		</div>
	);
};

export default ClientsClock;