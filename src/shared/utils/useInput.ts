import { useState } from "react";
import { Validation } from "./hooksInterface/validationsInterface";
import { useValidation } from "./useValidation";

export const useInput = (initialValue:string ,validations:Validation) =>{

	const [ value ,setValue ] = useState(initialValue);

	const [ isDirty ,setDirty ] = useState(false);

	const valid = useValidation(value,validations);
 
	const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
		setValue(e.target.value);
	};

	const onBlur= () =>{
		setDirty(true);
	};
	return{
		value,
		onChange,
		onBlur,
		isDirty,
		...valid
	};
};