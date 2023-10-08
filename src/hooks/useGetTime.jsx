/** @format */

import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";
const TIME_OFFSET = {
	PST: -7 * 60,
	EST: -4 * 60,
};
const useGetTime = (timeZone, offset) => {
	const [localTime, setLocalTime] = useState(null);
    const [utc, setUTC] = useState(null);
	const [localOffset, setLocalOffset] = useState(null)
	const [localTimeZone, setLocalTimeZone] = useState("")
	offset = offset * 60
    useEffect(() => {
        const nowTime = new Date();
		const lo = nowTime.getTimezoneOffset();
		setUTC(addMinutes(nowTime, lo));
		setLocalOffset(lo)
	}, []);
	
    useEffect(() => {

		if (utc !== null) {
			if (timeZone) {
				offset = TIME_OFFSET[timeZone] ?? offset;
				const time = addMinutes(utc, (offset))
				setLocalTime(time)

			} else {
				const localTime = addMinutes(utc, -localOffset)
				setLocalTime(localTime)
				const dateArr = localTime.toUTCString().split(' ')
				setLocalTimeZone(dateArr.pop());
				console.log('this is local time', localTime)
			}
		}

		

		
	}, [utc, timeZone, offset]);

	
	return {
		clock: localTime,
		timeZone: timeZone || localTimeZone,
		offset: offset || -(localOffset),
		
	};
};

export default useGetTime;
