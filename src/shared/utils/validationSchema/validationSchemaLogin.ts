import * as yup from 'yup';

export const validationsSchemaLogin = yup.object().shape({
	
	email:yup
		.string()
		.email('Enter right email')
		.typeError('email must be a string')
		.required('necessarily email'),

	password : yup
		.string()
		.typeError('email must be a string')
		.min(3, 'min length 3 digits')
		.required('necessarily password'),
	
});