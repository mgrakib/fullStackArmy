/** @format */

import { useEffect, useState } from "react";
import Card from "../../Shared/Card/Card";
import useGetTime from "../../hooks/useGetTime";

const LocalClock = ({
	clock,
	setLocalClock,
	clientClock,
	setClientClock,
	handelUpdateLocal,
	handelAdd,
	events,
	handelEvent,
	handelEventDelete,
}) => {
	return (
		<div>
			<Card
				clock={clock}
				setLocalClock={setLocalClock}
				local
				clientClock={clientClock}
				setClientClock={setClientClock}
				handelUpdateLocal={handelUpdateLocal}
				handelAdd={handelAdd}
				events={events}
				handelEvent={handelEvent}
				handelEventDelete={handelEventDelete}
			/>
		</div>
	);
};

export default LocalClock;
