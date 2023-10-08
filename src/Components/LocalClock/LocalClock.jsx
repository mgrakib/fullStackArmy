import { useState } from "react";
import Card from "../../Shared/Card/Card";
import useGetTime from "../../hooks/useGetTime";

const LocalClock = ({ date, timeZone, offset }) => {
	return (
		<div>
			<Card
				date={date}
                title={"My Clock"}
                timeZone={timeZone}
                offset={offset}
			/>
		</div>
	);
};

export default LocalClock;