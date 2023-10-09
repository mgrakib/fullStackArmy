import Button from "../../UI/Button";

const EventList = ({
	clockEvents,
	seteventModalOpen,
	eventModalOpen,
	handelEventDelete,
}) => {
	return (
		<div>
			{clockEvents.map(clockEvent => {
				return (
					<div key={clockEvent.eventId}>
						<h2>{clockEvent.eventTitle}</h2>

						<div style={{ display: "flex", gap: "10px" }}>
							<span>
								Started Time: {clockEvent.eventStartTime}
							</span>
							<span>End Time: {clockEvent.eventEndTime}</span>
						</div>

						<div>
							<Button
								onClick={() => {
									seteventModalOpen({
										...eventModalOpen,
										isOpen: true,
										isUpdate: true,
										targetEventIt: clockEvent.eventId,
									});
								}}
							>
								Edit Event
							</Button>
							<Button
								onClick={() => {
									handelEventDelete(clockEvent.eventId);
								}}
							>
								Delete Event
							</Button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default EventList;