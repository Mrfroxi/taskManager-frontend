import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../../shared/ui/button/roundedButton/roundedButton';
import AuthInput from '../../shared/ui/input/authInput/authInput';
import { validationsSchemaRegistration } from '../../shared/utils/validationSchema/validationSchemaRegistration';

 


const StyledForm = styled.form<TSingUpFormProps>`
        width: 100%;
        padding: 50px;
        font-size: 16px;
		position: relative;
		left:${props => props.active ? '0px' : '-100%'};
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
	active: boolean;
}


const SingInForm  = ({active} : TSingUpFormProps) =>{

	const [ requestForbidden, setRequestForbidden ] = useState(false);


	const formik = useFormik({

		initialValues: {
			userName:'',
			confirmPassword: '',
			password: '',
			email: '',
		},
		//values is a first param in function
		onSubmit: (values,actions) => {
		
			axios.post('http://159.223.139.137/auth/createUser',{
				email :formik.values.email,
				password: formik.values.password,
				userName: formik.values.userName
			}).then(()=>{
				setRequestForbidden(!requestForbidden);
			}).catch(() => {
				setRequestForbidden(!requestForbidden);
			});

			formik.resetForm({});//reset FieldForm

			actions.setSubmitting(true);//watch the push
		},

		validationSchema:validationsSchemaRegistration
	});

	return (
		<>
		
			
			<StyledForm active={active} onSubmit={formik.handleSubmit}>

				{
					requestForbidden ? 'this user already exists' :  formik.isSubmitting && <p>{'Check your Email to connect registration'}</p>
				}

				<StyledTitle>Login</StyledTitle>

				<AuthInput name='userName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userName}  placeholder={'userName'}/>

				<AuthInput name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}  placeholder={'email'}/>

				{formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}

				<AuthInput name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} placeholder={'password'} />

				{formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}

				<AuthInput name='confirmPassword' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} placeholder={'confirmPassword'}/>

				{formik.errors.confirmPassword && formik.touched.confirmPassword && <p>{formik.errors.confirmPassword}</p>}

				<StyledButton  type={'submit'}  disabled={!(formik.isValid && formik.dirty) } >Send</StyledButton> 

			</StyledForm>
		</>
	);

};

export default SingInForm;
