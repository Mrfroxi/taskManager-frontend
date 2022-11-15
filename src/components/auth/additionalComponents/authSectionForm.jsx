import React from 'react';
import styled  from 'styled-components';

const StyledSection = styled.section`
    width: 50%;
    text-align: center;
`;

const StyledSectionTitle = styled.p`
     font-size: 1.2rem;
    font-weight: 500;
    color: white;
    margin-bottom: 10px;
`;


const StyledSectionBtn = styled.button`
       border: none;
    cursor: pointer;
    padding: 10px 20px;
    background-color: aliceblue;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    border-radius: 16px;
`;

const AuthSection =  ({onClick}) => {
	return <StyledSection>
		<StyledSectionTitle >Do you have account?</StyledSectionTitle>
		<StyledSectionBtn  onClick={onClick}>LogIn</StyledSectionBtn>
	</StyledSection>;
};

export default AuthSection;