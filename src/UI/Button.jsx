import styled from "styled-components";

const Button = styled.button`
    padding: 5px 20px;
    background: ${props => props.bgColor ? props.bgColor : '#efef'};
    color: ${props => props.color ?? '#333'}


`


export default Button