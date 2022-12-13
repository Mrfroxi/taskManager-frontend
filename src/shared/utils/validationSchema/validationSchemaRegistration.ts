import * as yup from 'yup';

export const validationsSchemaRegistration = yup.object().shape({
	
	email:yup
		.string()
		.email('Enter right email')
		.typeError('email must be a string')
		.required('necessarily email'),

	password : yup
		.string()
		.typeError('email must be a string')
		.required('necessarily password'),
	

	confirmPassword: yup
		.string()
		.oneOf([ yup.ref('password') ] , 'Passwords do not match ')
		.required('necessarily confirmPassword'),


});