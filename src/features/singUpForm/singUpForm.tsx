import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../../shared/ui/button/roundedButton/roundedButton';
import AuthInput from '../../shared/ui/input/authInput/authInput';
import { validationsSchema } from '../../shared/utils/validationSchema/validationShema';

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

const SingUpForm  = ({active} :any)=>{
	return <StyledForm active={active}>

		<Formik
			initialValues={{ 
				email: '', 
				password: '' ,
			}}
			onSubmit={async (values) => {
				const response = await axios.get('http://159.223.139.137/users');
				console.log(response.data);
			}}
			validateOnBlur
			validationSchema={validationsSchema}
		>

			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isValid,
				isSubmitting,
				dirty
				/* and other goodies */
			}) => (		
				<>
			
					<StyledTitle>Login</StyledTitle>

					<AuthInput name='email' onChange={handleChange} onBlur={handleBlur} value={values.email}  placeholder={'email'}/>

					<AuthInput name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder={'password'} />


					{errors.email && touched.email && <p>{errors.email}</p>}

					<StyledButton active={active} type={'submit'}  disabled={!isValid && !dirty}>Send</StyledButton> 
		
				</>
		

			)}
		</Formik>
	</StyledForm>;
};

export default SingUpForm;