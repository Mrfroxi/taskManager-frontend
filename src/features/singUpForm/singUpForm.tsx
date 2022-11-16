import React from 'react';
import styled from 'styled-components';
import TitleList from '../../entities/authUi/titleList/titleList';
import { StyledButton } from '../../shared/ui/button/roundedButton/roundedButton';
import { StyledInput } from '../../shared/ui/input/authInput/authInput';
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

const SingUpForm  = ({active ,auth}:SingUpProps)=>{

	const {isEmpty,isDirty ,minLengthError,emailError , value , onBlur , onChange} = auth;

	return<StyledForm active={active}>

		<StyledTitle>Registration</StyledTitle>

		<TitleList isDirty={isDirty} minLengthError={minLengthError} emailError={emailError} isEmpty={isEmpty}/>

		<StyledInput name='email' type='text' value= {value} onChange={onChange} onBlur={onBlur} placeholder={'email'}/>

		<StyledInput name='password' type='text' value= {value} onChange={onChange} onBlur={onBlur} placeholder={'password'}/>

		<StyledButton active={active}>Send</StyledButton>
	</StyledForm>;
};

export default SingUpForm;