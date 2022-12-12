import styled  from 'styled-components';

type SendButton = {
	active:boolean,
	isValid?:boolean,
}

export const StyledButton =styled.button<SendButton>`
	border: none;
	cursor: pointer;
	font-size: inherit;
	background: ${props  => props.active ? 'rgb(68,4,149)' : 'rgb(31,142,190)' };
	padding: 10px 50px;
	border-radius: 8px;
	color: white;
`;


