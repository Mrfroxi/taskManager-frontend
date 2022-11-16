import { EmailEntity, PasswordEntity } from "../../../shared/interfaces/authInterface";

export interface SingUpProps {
	active:boolean,
	email:EmailEntity
	password:PasswordEntity
}