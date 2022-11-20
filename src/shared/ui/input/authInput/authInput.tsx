import styled from 'styled-components';

const StyledInput = styled.input`
width: 100%;
padding: 10px;
border: solid 1px #333;
font-size:inherit;
margin-bottom: 10px;
`;

const AuthInput = (props:any) =>{

	 const { value , onBlur , onChange ,name,placeholder} = props;
	 
	 return <StyledInput name={name} type='text' onBlur={onBlur} onChange={onChange} value={value} placeholder={placeholder}/>;
};

export default AuthInput;