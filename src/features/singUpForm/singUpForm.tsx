import React from 'react';
import styled from 'styled-components';
import TitleList from '../../entities/authUi/titleList/titleList';
import { StyledButton } from '../../shared/ui/button/roundedButton/roundedButton';
import AuthInput from '../../shared/ui/input/authInput/authInput';
import { useInput } from '../../shared/utils/useInput';
import { SingUpProps } from './interface/singUpFormInterface';

type TSingUpFormProps = {
	className?: string;
	active: boolean;
}

const StyledForm = styled.form<TSingUpFormProps>`
    width: 100%;
    padding: 50px;
    font-size: 16px;
	position: absolute;
	z-index:3;
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

const SingUpForm  = ({active}:SingUpProps)=>{
	const email = useInput('', {isEmpty:true,minLength:3, isEmail: true } );
	const password = useInput('', {isEmpty:true ,minLength:5});
	console.log(password)
	console.log(email)
	return<StyledForm active={active}>

		<StyledTitle>Registration</StyledTitle>

		<TitleList email={email} password={password}/>
	
		<AuthInput name='email' type='text' value= {email.value} onChange={email.onChange} onBlur={email.onBlur} placeholder={'email'}/>

		<AuthInput name='password' type='text' value= {password.value} onChange={password.onChange} onBlur={password.onBlur} placeholder={'password'}/>

		<StyledButton active={active}>Send</StyledButton>
	</StyledForm>;
};

export default SingUpForm;