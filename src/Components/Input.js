/** @format */

import styled from "styled-components";

const Input = styled.input`
	border: 1px solid #999;
	outline: none;
	padding: 0.2rem 0.5rem;
    
	&:focus {
		border: 1px solid skyblue;
        border-radius: 3px;
	}
`;

export default Input;
