import React ,{useState} from 'react';
import classes from  './authComponent.module.css';
import { useInput } from '../../hooks/useInput';
import AuthFormBox from './additionalComponents/authFormBox';
import { createGlobalStyle } from 'styled-components';
import AuthSection from './additionalComponents/authSectionForm';

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
		/* background: ${props => (props.active ? 'linear-gradient(45deg,rgb(31,142,190),#7d058f,rgb(68,4,149))' : 'linear-gradient(45deg,rgb(79, 26, 80),rgb(31,142,190),rgb(68,4,149))')}; */
		background: ${props => props.active ? 'rgb(68,4,149)' :'rgb(31,142,190)'}; 
	}
	`;

	return (
		<div className={classes.formContainer}>
			<GlobalStyle active={currentAuthCondition}/>

			<AuthSection onClick ={() => changeAuth() }/>

			<AuthSection onClick ={() => changeAuth() }/>
		

			<AuthFormBox type={'log'}  active={currentAuthCondition} auth={email}/>

			<AuthFormBox type={'reg'}  active={currentAuthCondition} auth={password} />
		
		</div>
	);
};

export default AuthComponent;