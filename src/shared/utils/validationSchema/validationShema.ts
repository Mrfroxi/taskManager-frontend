import * as yup from 'yup';

export const validationsSchema = yup.object().shape({
	email:yup.string().email('Enter right email').typeError('email must be a string').required('necessarily'),
	password : yup.string().typeError('email must be a string').required('necessarily'),
	confirmPassword: yup.string().oneOf([ yup.ref('password') ] , 'Passwords do not match '),
	emailLogin:yup.string().email('Enter right email').typeError('email must be a string').required('necessarily'),
});