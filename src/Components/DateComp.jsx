/** @format */

import React, { useEffect, useState } from "react";
import { timeConvert } from "../utils/timeConvert";
import { getMinutes } from "date-fns";

const DateComp = ({ info }) => {
	
	
	const [ownTime, setOwnTime] = useState(new Date());
	const getTime = timeConvert(info)
	

	useEffect(() => {
		// Function to get and format the current time

		// Update ownTime every second (optional, for a real-time clock)
		const intervalId = setInterval(() => {
			setOwnTime(getTime);
		}, 1000);

		// Cleanup the interval on unmount (optional)
		return () => clearInterval(intervalId);
	}, [getTime]);


	const formattedTime = new Date(ownTime).toLocaleTimeString(undefined, {
		timeZone: "UTC", // You can specify the desired timezone here
		hour12: false, // Use 24-hour format
	});
	return (
		<div>
			<p>{formattedTime}</p>
		</div>
	);
};

export default DateComp;
