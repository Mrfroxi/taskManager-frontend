export interface EmailEntity{
	isEmpty: boolean;
	minLengthError: boolean;
	emailError: boolean;
	inputValid: boolean;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: () => void;
	isDirty: boolean;
}

export interface PasswordEntity{
	isEmpty: boolean;
	minLengthError: boolean;
	emailError: boolean;
	inputValid: boolean;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: () => void;
	isDirty: boolean;
}