import React from 'react';
import styled, { css }  from 'styled-components';
import AuthForm from './authForm';

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

const AuthFormBox = ({type ,active ,auth}) =>{

	return <StyledForm active={active}>
		<AuthForm  type={type} active={active} auth={auth}/>
	</StyledForm>;

	
};

export default AuthFormBox;