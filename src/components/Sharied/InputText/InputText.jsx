import styled from "styled-components";

const InputText = styled.input`
	outline: none;
	border: ${props => (props.error ? "1px solid #ff0000" : "1px solid #999")};
	padding: 0.2rem 0.5rem;
	width: 100%;
	border-radius: 2px;

	&:focus {
		border: 1px solid skyblue;
	}
`;

export default InputText