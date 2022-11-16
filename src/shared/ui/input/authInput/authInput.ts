import styled from 'styled-components';

type TStyledInputProps = {
	name:string,
	type:string,
	value: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	onBlur: () => void,
	placeholder: string,
}
export const StyledInput = styled.input<TStyledInputProps>`
width: 100%;
padding: 10px;
border: solid 1px #333;
font-size:inherit;
margin-bottom: 10px;
`;