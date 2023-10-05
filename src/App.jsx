/** @format */

import { useState } from "react";
import InputGroup from "./components/Sharied/InputGroup/InputGroup";
import Wrapper from "./components/Wrapper/Wrapper";
import Button from "./components/Sharied/Button/Button";

const init = {
	name: "",
	email: "",
	skills: "",
};
const App = () => {
	const [values, setValues] = useState({ ...init });
	const [errors, setErrors] = useState({ ...init });

	const [focuses, setFocuses] = useState({
		name: false,
		email: false,
		skills: false,
	});


  

	const handelOnChange = e => {
		const key = e.target.name;
    setValues(pre => ({ ...pre, [key]: e.target.value }));
    // TODO: change syncronous
		handelLiveChange(key, values);
	};

	const handelOnSubmit = e => {
		e.preventDefault();
		const { error, isValid } = checkValid(values);

		if (!isValid) {
			setErrors({ ...error });
		} else {
			setErrors({ ...init });
		}
	};

	const checkValid = values => {
		const error = {};
		const { name, email, skills } = values;
		if (!name) {
			error.name = "Name is invalid";
		}
		if (!email) {
			error.email = "Email is Invalid";
		}
		if (!skills) {
			error.skills = "Skills Is Invalid";
		}

		return {
			error,
			isValid: Object.keys(error).length === 0,
		};
	};

	const handelOnFocus = e => {
		const key = e.target.name;
		setFocuses({ ...focuses, [key]: true });
	};
	const handelOnBlur = e => {
		const key = e.target.name;
		handelLiveChange(key, values);
	};

	const handelLiveChange = (key, values) => {
		console.log(values, " thisis vklaue");
		const { isValid, error } = checkValid(values);

		if (focuses[key] && error[key]) {
			setErrors(pre => ({ ...pre, [key]: error[key] }));
		} else {
			setErrors(pre => ({ ...pre, [key]: "" }));
		}
	};

	return (
		<Wrapper>
			<form onSubmit={handelOnSubmit}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
					}}
				>
					<InputGroup
						value={values.name}
						title={"What is your name"}
						name={"name"}
						error={errors.name}
						onChange={handelOnChange}
						onFocus={handelOnFocus}
						onBlur={handelOnBlur}
					/>
					<InputGroup
						title={"What is your name"}
						name={"email"}
						value={values.email}
						error={errors.email}
						onChange={handelOnChange}
						onFocus={handelOnFocus}
						onBlur={handelOnBlur}
					/>
					<InputGroup
						title={"What is your name"}
						name={"skills"}
						value={values.skills}
						error={errors.skills}
						onChange={handelOnChange}
						onFocus={handelOnFocus}
						onBlur={handelOnBlur}
					/>
				</div>

				<div style={{ marginTop: "20px" }}>
					<Button>Click Me</Button>
				</div>
			</form>
		</Wrapper>
	);
};

export default App;
