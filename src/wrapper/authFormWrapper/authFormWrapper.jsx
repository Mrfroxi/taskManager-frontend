import React from 'react';
import styled, { css }  from 'styled-components';
import SingInForm from '../../features/singInForm/singInFrom';
import SingUpForm from '../../features/singUpForm/singUpForm';


const StyledForm = styled.div`${(props)=>{
	return css`
    background-color:white;
    height: 100%;
    width: 50%;
    position:  absolute;
    top: 0;
    left: ${props => props.active ? '0px' :'50%'};
    transition: 0.5s ease-in-out;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
    `;
}}`;

const AuthFormBox = ({active ,email ,type ,password}) =>{

	return <StyledForm active={active}>
		{type === 'log' ?  <SingInForm  active={active} email={email} password={password}/> : <SingUpForm active={active} email={email} password={password}/>}

	</StyledForm>;

	
};

export default AuthFormBox;