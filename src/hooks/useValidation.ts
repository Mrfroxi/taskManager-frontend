import { useEffect, useState } from "react";
import { Validation } from "./hooksInterface/validationsInterface";

export const useValidation = (value:string ,validations:Validation) => {

	const [ isEmpty ,setEmpty ] = useState(true);
	const [ minLengthError,setMinLengthError ] = useState(false);
	const [ emailError,setEmailError ] = useState(true);
	const[ inputValid ,setInputValid ] = useState(false);

	useEffect ( () => { 
		//validations keys 
		for (let validation in validations){
			switch (validation){
				case 'minLength':
					value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
					break;
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true);
					break;
				case 'isEmail':
					const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
					re.test(String(value).toLocaleLowerCase()) ? setEmailError(false) :setEmailError(true);
					break;
			}
		}
	},[ value ]);
	
	useEffect(() => {
		if(isEmpty  || minLengthError) setInputValid(false);

		setInputValid(true);
	},[ isEmpty  || minLengthError ]);

	return {
		isEmpty,
		minLengthError,
		emailError,
		inputValid
	};
};
