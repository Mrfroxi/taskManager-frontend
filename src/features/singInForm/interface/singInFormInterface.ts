import { EmailEntity, PasswordEntity } from "../../../shared/interfaces/authInterface";

export interface SingInProps {
	active:boolean,
	email?:EmailEntity
	password?:PasswordEntity
}