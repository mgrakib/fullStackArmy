import { useState, useEffect } from "react";
import Modal from "../../Shared/Modal/Modal";
import ClockActions from "../../Shared/clock-actions";
import ClockDisplay from "../../Shared/clock-display";
import useGetTime from "../../hooks/useGetTime";
import { addSeconds } from "date-fns";
import EventForm from "../../Shared/Modal/EventForm";
import SingleEvent from "../../Shared/SingleEvent";


const ClientClockCard = ({
	clock,
	handelUpdateClient,
	handelDelete,
	localClock, // calculate for distance
	handelEvent,
	handelEventDelete,
	handelUpdateEvent,
	events,
}) => {
	// modal for update
	const [modalOpen, setModalOpen] = useState({
		isOpen: false,
		isUpdate: true, //always true
	});

	const [eventModalOpen, seteventModalOpen] = useState({
		//modal for create or update event
		isOpen: false,
		isUpdate: true,
		targetEventIt: "",
	});

	const { date, timeZone, offset } = useGetTime(clock.timeZone, clock.offset); //get date and other info from hooks
	const [timer, setTimer] = useState(); //live clock

	useEffect(() => {
		//copy origin date
		setTimer(date);
	}, [date]);

	let timerId = null;

	// useEffect(() => {
	// 	//live clock
	// 	if (!timer || timerId !== null) return;

	// 	timerId = setInterval(() => {
	// 		setTimer(addSeconds(timer, 1));
	// 	}, 1000);
	// 	return () => clearInterval(timerId);
	// }, [timer]);

	const handelSubmit = formValue => {
		//handel update client info
		handelUpdateClient({
			...formValue,
			id: clock.id,
		});
	};

	const clockEvent = events.filter(evetn => evetn.clockId === clock.id);

	
	return (
		<>
			<div>
				<div>
					<ClockDisplay
						clock={clock}
						date={timer}
						timeZone={timeZone}
						offset={offset}
					/>

					<ClockActions
						handelUpdateClient={handelUpdateClient}
						setModalOpen={setModalOpen}
						handelDelete={handelDelete}
						clock={clock}
						seteventModalOpen={seteventModalOpen}
						eventModalOpen={eventModalOpen}
					/>
				</div>

				<div>
					{clockEvent.map(e => (
						<SingleEvent
							key={e.eventId}
							event={e}
							handelEventDelete={handelEventDelete}
							seteventModalOpen={seteventModalOpen}
						/>
					))}
				</div>
			</div>

			<div>
				{modalOpen.isOpen && (
					<Modal
						handelSubmit={handelSubmit}
						setModalOpen={setModalOpen}
						isUpdate={modalOpen.isUpdate}
					/>
				)}

				{eventModalOpen.isOpen && (
					<EventForm
						handelEvent={handelEvent}
						handelUpdateEvent={handelUpdateEvent}
						seteventModalOpen={seteventModalOpen}
						isUpdate={eventModalOpen.isUpdate}
						clockId={clock.id}
						eventId={eventModalOpen.targetEventIt}
					/>
				)}
			</div>
		</>
	);
};

export default ClientClockCard;