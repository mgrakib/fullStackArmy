/** @format */

import React from "react";
import Button from "../../UI/Button";

const SingleEvent = ({
	event,
	handelEventDelete,
	seteventModalOpen,
	eventModalOpen,
	
}) => {
	return (
		<div>
			<h1>Event Title: {event?.eventTitle}</h1>
			<p>{event?.eventId}</p>
			<div>
				<Button onClick={() => handelEventDelete(event?.eventId)}>
					Delete
				</Button>
				<Button
					onClick={() =>
						seteventModalOpen({
							...eventModalOpen,
							isOpen: true,
							isUpdate: true,
							targetEventIt: event?.eventId,
						})
					}
				>
					Edit
				</Button>
			</div>
		</div>
	);
};

export default SingleEvent;
