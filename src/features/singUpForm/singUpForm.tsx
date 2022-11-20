import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../../shared/ui/button/roundedButton/roundedButton';
import AuthInput from '../../shared/ui/input/authInput/authInput';

const StyledForm = styled.form<TSingUpFormProps>`
    width: 100%;
    padding: 50px;
    font-size: 16px;
	position: absolute;
	left:${props => props.active ? '100%' : '0'};
	transition:  0.45s;
	display: flex;
	flex-direction: column;
    justify-content: space-between;   
`; 

const StyledTitle = styled.p`
	font-size: 16px;
	font-weight:bold
`;

type TSingUpFormProps = {
	className?: string;
	active: boolean;
}

const SingUpForm  = (props :any)=>{

	const { active ,onChange ,onBlur ,onClick ,values ,isValid ,dirty,errors,touched}  = props; 
	return<StyledForm active={active}>

		<StyledTitle>Login</StyledTitle>

		<AuthInput name='email' onChange={onChange} onBlur={onBlur} value={values.email}  placeholder={'email'}/>

		<AuthInput name='password' onChange={onChange} onBlur={onBlur} value={values.password}  placeholder={'password'}/>

		{errors.email && touched.email && <p>{errors.email}</p>}

		<StyledButton active={active} type={'submit'} disabled={!isValid && !dirty}>Send</StyledButton> 
	</StyledForm>;
};

export default SingUpForm;