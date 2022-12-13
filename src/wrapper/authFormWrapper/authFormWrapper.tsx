import React from 'react';
import styled from 'styled-components';
import SingInForm from '../../features/singInForm/singInFrom';
import SingUpForm from '../../features/singUpForm/singUpForm';
const StyledFormBox = styled.div<TSingUpFormProps>`
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

type TSingUpFormProps = {
	className?: string;
	active: boolean;
}

const AuthFormBox = ({active}:any) =>{



	return  <StyledFormBox active={active}>
	
		<>
			<SingUpForm 
				active={active} 
					
			/>

			<SingInForm
				active={active} 
						
			/>
				
		</>
				


	</StyledFormBox>;
};

export default AuthFormBox;