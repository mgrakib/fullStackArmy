import React from 'react';
import Input from '../Input';
import Button from '../Button/Button';

const Modal = ({ setModalOpen , modalOpen}) => {
	return (
		modalOpen && (
			<div
				style={{
					position: "fixed",
					inset: "0",
					width: "100vw",
					height: "100vh",
					background: "#00000075",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						padding: "20px",
						background: "#fff",
						borderRadius: "5px",
					}}
				>
					<Input placeholder='name' />

					<div style={{ marginTop: "15px" }}>
						<Button onClick={() => setModalOpen(false)}>
							Submit
						</Button>
					</div>
				</div>
			</div>
		)
	);
};

export default Modal;