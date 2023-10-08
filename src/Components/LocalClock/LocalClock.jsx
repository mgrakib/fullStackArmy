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
			/>
		</div>
	);
};

export default LocalClock;
