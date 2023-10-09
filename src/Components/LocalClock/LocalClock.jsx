/** @format */

import { useEffect, useState } from "react";
import Card from "../../Shared/Card/Card";
import useGetTime from "../../hooks/useGetTime";
import ClockDisplay from "../../Shared/clock-display";
import ClockActions from "../../Shared/clock-actions";
import Modal from "../../Shared/Modal/Modal";
import shortid from "shortid";
import { addSeconds } from "date-fns";
import EventForm from "../../Shared/Modal/EventForm";
import SingleEvent from "../../Shared/SingleEvent";

const LocalClock = ({
	clock,
	handelUpdateLocal,
	handelAdd,
	handelUpdateEvent,
	handelEvent,
	events,
	handelEventDelete,
	
}) => {
	const { date, offset, timeZone } = useGetTime(
		clock?.timeZone,
		clock?.offset
	); //user hooks for getting time and offset
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		// copy orginal date
		setTimer(date);
	}, [date]);

	let timerId = null;
	// useEffect(() => {
	// 	if (!timer || timerId !== null) return

	// 	timerId = setInterval(() => {
	// 		setTimer(addSeconds(timer, 1));
	// 	}, 1000)

	// 	return () => clearInterval(timerId)
	// },[timer])

	// modal for update and add
	const [modalOpen, setModalOpen] = useState({
		isOpen: false,
		isUpdate: true, //true if want to update false for add new
	});
	const [eventModalOpen, seteventModalOpen] = useState({
		isOpen: false,
		isUpdate: true,
		targetEventIt: "",
	});

	const handelSubmit = formValue => {
		if (modalOpen.isUpdate) {
			// if want to update
			handelUpdateLocal(formValue);
		} else {
			formValue.id = shortid.generate();

			handelAdd(formValue);
		}

		setModalOpen(pre => ({
			...modalOpen,
			isOpen: false,
		}));
	};
	useEffect(() => {
		handelUpdateLocal({
			...clock,
			date,
		});
	}, [date]);

	const clockEvent = events.filter(evetn => evetn.clockId === clock.id);
	return (
		<div>
			<div>
				<div>
					<ClockDisplay
						clock={clock}
						date={timer}
						timeZone={timeZone}
						offset={offset}
					/>
					<ClockActions
						setModalOpen={setModalOpen}
						modalOpen={modalOpen}
						local={true}
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
							seteventModalOpen={seteventModalOpen}
							handelEventDelete={handelEventDelete}
							eventModalOpen={eventModalOpen}
						/>
					))}
				</div>
			</div>

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
	);
};

export default LocalClock;
