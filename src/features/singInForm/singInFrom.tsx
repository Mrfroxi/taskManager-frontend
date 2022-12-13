import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from '../../shared/ui/button/roundedButton/roundedButton';
import AuthInput from '../../shared/ui/input/authInput/authInput';
import { validationsSchemaLogin } from '../../shared/utils/validationSchema/validationSchemaLogin';

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
	const navigate = useNavigate();
	const formik = useFormik({

		initialValues: {
			password: '',
			email: '',
		},
		//values is a first param in function
		onSubmit: (values,actions) => {
			console.log(1);
			
			navigate("/main");
	

			formik.resetForm({});//reset FieldForm

			actions.setSubmitting(true);//watch the push
		},

		validationSchema:validationsSchemaLogin
	});

	return (

		<StyledForm active={active} onSubmit={formik.handleSubmit}>

			<StyledTitle>Login</StyledTitle>

			<AuthInput name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}  placeholder={'email'}/>

			{formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}

			<AuthInput name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder={'password'} />

			{formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}

			<StyledButton  type={'submit'}  disabled={!(formik.isValid && formik.dirty) } >Send</StyledButton> 

		</StyledForm>

	);

};

export default SingUpForm;