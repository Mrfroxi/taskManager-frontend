import React ,{useState} from 'react';
import   styled, { createGlobalStyle } from 'styled-components';
import { useInput } from '../../shared/utils/useInput';
import AuthSection from '../../wrapper/authFormSectionWrapper/authSectionWrapper';
import AuthFormBox from '../../wrapper/authFormWrapper/authFormWrapper';

const StyledComponent = styled.div`
   width:800px;
   height: 500px;
   padding: 40px 0;
   position: relative;
   box-shadow:  0 5px 45px rgba(0, 0, 0, 0.2);
   display: flex;
   align-items: center;
   overflow: hidden;
`;

const AuthComponent =  () => {
	const email = useInput('', {isEmpty:true ,minLength:5,isEmail: true ,} );
	const password = useInput('',{isEmpty:true ,minLength:5});
	const [ currentAuthCondition ,setCurrentAuthCondition ] = useState(false); 

	const changeAuth = () => {
		setCurrentAuthCondition(!currentAuthCondition);
	};


	const GlobalStyle = createGlobalStyle`
	body {
		margin:0;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center; 
		transition:all 0.5s ease;
		background: ${props => props.active ? 'rgb(68,4,149)' :'rgb(31,142,190)'}; 
	}

	*{
    box-sizing: border-box;
	}
	`;

	return (<StyledComponent >
		<GlobalStyle active={currentAuthCondition}/>

		<AuthSection onClick ={() => changeAuth() }/>

		<AuthSection onClick ={() => changeAuth() }/>
		
		<AuthFormBox   active={currentAuthCondition} auth={email} type={'reg'}/>

		<AuthFormBox   active={currentAuthCondition} auth={password} type={'log'}/>  
		
	</StyledComponent>)
	;
};

export default AuthComponent;