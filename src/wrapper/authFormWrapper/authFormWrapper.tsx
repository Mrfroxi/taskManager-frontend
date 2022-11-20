import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';
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

const AuthFormBox = ({active  ,type }:any) =>{

	const validationsSchema = yup.object().shape({
		email:yup.string().email('Enter right email').typeError('email must be a string').required('necessarily'),
		password : yup.string().typeError('email must be a string').required('necessarily'),
		confirmPassword: yup.string().oneOf([ yup.ref('password') ] , 'Passwords do not match ')
	});

	return  <StyledFormBox active={active}>

		<Formik
			initialValues={{ 
				email: '', 
				password: '' 
				,confirmPassword:'' 
			}}
			onSubmit={(values) => {
				console.log(values);
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
					<SingInForm 
						active={active} 
						onChange={handleChange} 
						onBlur={handleBlur} 
						values={values}
						dirty={dirty}
						isValid={isValid}
						errors={errors}
						touched={touched}
					/>

					<SingUpForm 
						active={active} 
						onChange={handleChange} 
						onBlur={handleBlur} 
						values={values}
						dirty={dirty}
						isValid={isValid}
						errors={errors}
						touched={touched}
					/>
				
				</>
				

			)}
		</Formik>

	</StyledFormBox>;
};

export default AuthFormBox;