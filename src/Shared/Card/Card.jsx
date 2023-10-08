import React, { useState } from 'react';
import Text from '../../UI/Text';
import Button from '../../UI/Button';
import Modal from '../Modal/Modal';

const Card = ({ date, title, timeZone, offset }) => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<div>
			<Text>Title: {title}</Text>
			<Text>{date.toLocaleString()}</Text>
			<Text>
				{timeZone} | {-offset/60}
			</Text>
			<Button onClick={() => setModalOpen(true)}>Update</Button>

			{modalOpen && <Modal setModalOpen={setModalOpen} />}
		</div>
	);
};

export default Card;