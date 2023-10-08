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
	handelDelete,
	handelUpdateClient,
	handelUpdateLocal,
	handelAdd,
}) => {
	const [modalOpen, setModalOpen] = useState({
		isOpen: false,
		isUpdate: true,
	});
	const {
		clock: localClock,
		offset,
		timeZone,
	} = useGetTime(clock.timeZone, clock.offset);

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
			const id = clientClock[clientClock.length - 1].id + 1;

			const newClient = {
				id,
				...formValue,
			};
			handelAdd(newClient);
			// setClientClock([...clientClock, newClient]);
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
			</div>

			{modalOpen.isOpen && (
				<Modal
					handelSubmit={handelSubmit}
					setModalOpen={setModalOpen}
					isUpdate={modalOpen.isUpdate}
				/>
			)}
		</div>
	);
};

export default Card;
