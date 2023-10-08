/** @format */

import React, { useState } from "react";
import Text from "../../UI/Text";
import Button from "../../UI/Button";
import Modal from "../Modal/Modal";
import useGetTime from "../../hooks/useGetTime";

const Card = ({
	clock,
	setLocalClock,
	setClientClock,
	clientClock,
	local = false,
}) => {
	const [modalOpen, setModalOpen] = useState(false);
	const {
		clock: localClock,
		offset,
		timeZone,
	} = useGetTime(clock.timeZone, clock.offset);
	const handelSubmit = formValue => {
		
		{
			local &&
				setLocalClock({
					...clock,
					...formValue,
				});
		}

		if (!local) {
			let targetClient = clientClock.find(
				clientClock => clientClock.id === clock.id
			);
			targetClient = {
				...targetClient,
				...formValue,
			};

			const restClient = clientClock.filter(
				clientClock => clientClock.id !== clock.id
			);

			setClientClock([...restClient, targetClient]);
		}
	};

	return (
		<div>
			<Text>Title: {clock.title}</Text>
			<Text>{localClock && localClock.toLocaleString()}</Text>
			<Text>
				{timeZone}{" "}
				{(clock?.timeZone === "UTC" ||
					clock?.timeZone === "GMT" ||
					!clock?.timeZone) &&
					`| ${offset / 60}`}
			</Text>
			<div style={{ display: "flex", gap: "10px" }}>
				<Button onClick={() => setModalOpen(true)}>Update</Button>
				{local && (
					<Button onClick={() => setModalOpen(true)}>Add</Button>
				)}
			</div>

			{modalOpen && (
				<Modal
					handelSubmit={handelSubmit}
					setModalOpen={setModalOpen}
				/>
			)}
		</div>
	);
};

export default Card;
