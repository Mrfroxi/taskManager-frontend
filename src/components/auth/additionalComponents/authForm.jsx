import React from 'react';
import styled, { css }  from 'styled-components';

const StyledForm = styled.form`${(props)=>{
	switch(props.id){
		case 'reg' :
			return css`
                                width: 100%;
                                padding: 50px;
                                font-size: 16px;
								position: absolute;
								z-index:3;
								left:${props => props.active ? '0px' : '-100%'};
								transition:  0.45s;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
                        `; 
		case 'log' :
			return css`
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
	}}}`;

const StyledInput = styled.input`
	width: 100%;
	padding: 10px;
	border: solid 1px #333;
	font-size:inherit;
	margin-bottom: 10px;
`;

const StyledButton =styled.button`
	border: none;
	cursor: pointer;
	font-size: inherit;
	background: ${props  => props.active ? 'rgb(68,4,149)' : 'rgb(31,142,190)' };
	padding: 10px 50px;
	border-radius: 8px;
	color: white;
`;

const StyledTitle = styled.p`
	font-size: 16px;
	font-weight:bold
`;

const AuthForm = ({type ,active ,auth}) =>{

	const {isEmpty,isDirty ,minLengthError,emailError , value , onBlur , onChange} = auth;

	return<StyledForm active={active} id={type}>
	
		{type === 'log' ?
			<>
				<StyledTitle>Registration</StyledTitle>
				{(isEmpty && isDirty) && <div style={{color:'red'}}> The field cannot be empty</div>}

				{(isDirty && minLengthError) && <div style={{color:'red'}}>Incorrect password length</div>}

				{(emailError && isDirty) && <div style={{color:'red'}}>Incorrect email</div>} 
				<StyledInput name='email' type='text' value= {value} onChange={onChange} onBlur={onBlur} placeholder={'email'}/>
				
				<StyledInput name='password' type='text' value= {value} onChange={onChange} onBlur={onBlur} placeholder={'password'}/>

				<StyledInput name='repeat password' type='text' value= {value} onChange={onChange} onBlur={onBlur} placeholder={'repeat password'}/>

				<StyledButton active={active}> Send </StyledButton>
			</>
			
			: 

			<>
				<StyledTitle>LogIn</StyledTitle>

				{(isEmpty && isDirty) && <div style={{color:'red'}}> The field cannot be empty</div>}

				{(isDirty && minLengthError) && <div style={{color:'red'}}>Incorrect password length</div>}

				{(emailError && isDirty) && <div style={{color:'red'}}>Incorrect email</div>} 

				<StyledInput name='email' type='text' value= {value} onChange={onChange} onBlur={onBlur} placeholder={'email'}/>

				<StyledInput name='password' type='text' value= {value} onChange={onChange} onBlur={onBlur} placeholder={'password'}/>

				<StyledButton active={active}> Send </StyledButton>
			</>
		}

	</StyledForm>;
};

export default AuthForm;