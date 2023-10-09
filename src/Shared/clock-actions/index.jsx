import Button from "../../UI/Button";

const ClockActions = ({
	setModalOpen,
	modalOpen,
	local,
	handelDelete,
	clock,
	seteventModalOpen,
	eventModalOpen,
}) => {
	return (
		<div>
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
		</div>
	);
};

export default ClockActions