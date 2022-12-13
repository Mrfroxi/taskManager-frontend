import styled  from 'styled-components';

type SendButton = {
	isValid?:boolean,
	disabled:boolean
}

export const StyledButton =styled.button<SendButton>`
	border: none;
	cursor: pointer;
	font-size: inherit;
	background: ${props  => props.disabled ? 'rgb(190, 190, 190)' : 'rgb(31,142,190)' };
	padding: 10px 50px;
	border-radius: 8px;
	color: white;
`;


