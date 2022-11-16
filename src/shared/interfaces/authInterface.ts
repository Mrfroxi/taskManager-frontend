export interface IAuth {
	isEmpty: boolean;
	minLengthError: boolean;
	emailError: boolean;
	inputValid: boolean;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: () => void;
	isDirty: boolean;
}