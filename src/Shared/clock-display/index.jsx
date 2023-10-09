import Text from "../../UI/Text";

const ClockDisplay = ({ clock, date, timeZone, offset }) => {
	return (
		<div>
			<Text>Title: {clock?.title}</Text>
			<Text>{date && date?.toLocaleString()}</Text>
			<Text>
				{timeZone}{" "}
				{(clock?.timeZone === "UTC" ||
					clock?.timeZone === "GMT" ||
					!clock?.timeZone) &&
					`| ${
						offset / 60 < 0
							? `-${Math.abs(offset / 60)}`
							: `+${Math.abs(offset / 60)}`
					}`}
			</Text>
		</div>
	);
};

export default ClockDisplay;