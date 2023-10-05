import React from 'react';
import Label from '../Label/Label';
import InputText from '../InputText/InputText';

const InputGroup = ({
	title,
	name,
	error,
	value,
	onChange,
	onFocus,
	onBlur,
}) => {
	return (
		<div>
			<Label htmlFor={name}>{title}</Label>
			<InputText
				id={name}
				name={name}
				error={error}
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
			{error && <small style={{ color: "#ff0000" }}>{error}</small>}
		</div>
	);
};

export default InputGroup;