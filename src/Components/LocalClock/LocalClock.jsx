/** @format */

import { useEffect, useState } from "react";
import Card from "../../Shared/Card/Card";
import useGetTime from "../../hooks/useGetTime";

const LocalClock = ({ clock, setLocalClock }) => {
	return (
		<div>
			<Card
				clock={clock}
                setLocalClock={setLocalClock}
                local
			/>
		</div>
	);
};

export default LocalClock;
