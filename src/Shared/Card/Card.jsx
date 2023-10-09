/** @format */

import React, { useEffect, useState } from "react";
import Text from "../../UI/Text";
import Button from "../../UI/Button";
import Modal from "../Modal/Modal";
import useGetTime from "../../hooks/useGetTime";
import EventForm from "../Modal/EventForm";
import EventList from "../../Components/EventList/EventList";
import { addSeconds, formatDistance } from "date-fns";

const Card = ({
	clock,
	setLocalClock,
	setClientClock,
	clientClock,
	local = false,
	handelDelete,
	handelUpdateClient,
	handelUpdateLocal,
	handelAdd,
	events,
	handelEvent,
	handelEventDelete,
	localClock:localClockState,
}) => {
	const [clockEvents, setClockEvents] = useState([]);
	const handelUpdateEvent = eventInfo => {
		const newEvent = clockEvents.map(e => {
			if (e.eventId === eventInfo.eventId) {
				return eventInfo;
			} else {
				return e;
			}
		});

		setClockEvents([...newEvent]);
	};
	const [modalOpen, setModalOpen] = useState({
		isOpen: false,
		isUpdate: true,
	});
	const [eventModalOpen, seteventModalOpen] = useState({
		isOpen: false,
		isUpdate: true,
		targetEventIt: "",
	});

	// const {
	// 	clock: localClock,
	// 	offset,
	// 	timeZone,
	// } = useGetTime(clock.timeZone, clock.offset);


	const [timer, setTimer] = useState(localClock);

	const handelSubmit = formValue => {
		if (modalOpen.isUpdate) {
			{
				local && handelUpdateLocal(formValue);
			}

			if (!local) {
				// let targetClient = clientClock.find(
				// 	clientClock => clientClock.id === clock.id
				// );
				// targetClient = {
				// 	...targetClient,
				// 	...formValue,
				// };

				// const restClient = clientClock.filter(
				// 	clientClock => clientClock.id !== clock.id
				// );

				// setClientClock([...restClient, targetClient]);

				handelUpdateClient({ ...formValue, id: clock.id });
			}
		} else {
			
			const id = clientClock[clientClock.length - 1]?.id
				? clientClock[clientClock.length - 1]?.id + 1
				: 1;

			const newClient = {
				id,
				...formValue,
			};
			handelAdd(newClient);
			// setClientClock([...clientClock, newClient]);
		}
	};

	useEffect(() => {
		const c = events.filter(event => event.clockId === clock.id);
		setClockEvents(c);
	}, [events, clock.id]);

	useEffect(() => {
		setTimer(localClock);
	}, [localClock]);

	let timerId = null;
	// useEffect(() => {
	// 	if (!timer || timerId !== null) return;

	// 	timerId = setInterval(() => {
	// 		setTimer(addSeconds(timer, 1));
	// 	}, 1000);

	// 	return () => {
	// 		clearInterval(timerId);
	// 	};
	// }, [timer]);

	useEffect(() => {
		console.log(localClockState);
	}, [localClockState]);
	return (
		<div>
			<Text>Title: {clock.title}</Text>
			<Text>{timer && timer.toLocaleString()}</Text>
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
			<div style={{ display: "flex", gap: "10px" }}>
				<Button
					onClick={() =>
						setModalOpen({
							...modalOpen,
							isOpen: true,
							isUpdate: true,
						})
					}
				>
					Update
				</Button>
				{local && (
					<Button
						onClick={() =>
							setModalOpen({
								...modalOpen,
								isOpen: true,
								isUpdate: false,
							})
						}
					>
						Add
					</Button>
				)}
				{!local && (
					<Button onClick={() => handelDelete(clock.id)}>
						Delete
					</Button>
				)}

				<Button
					onClick={() => {
						seteventModalOpen({
							...eventModalOpen,
							isOpen: true,
							isUpdate: false,
						});
					}}
				>
					Create Event
				</Button>
			</div>

			<div>
				<EventList
					clockEvents={clockEvents}
					eventModalOpen={eventModalOpen}
					seteventModalOpen={seteventModalOpen}
					handelEventDelete={handelEventDelete}
				/>
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

export default Card;
