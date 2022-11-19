import React from "react";
import { EmailEntity, PasswordEntity } from "../../../shared/interfaces/authInterface";
import { DesiredTitle } from "../../../shared/ui/desiredTitle/desiredTitle";

type TitleListProps = {
	email:EmailEntity,
	password:PasswordEntity
}

const TitleList = ({email,password}:TitleListProps) => {
	
	return (
		<>
			{((email.isEmpty || password.isEmpty) && (email.isDirty || password.isDirty)) && <DesiredTitle > The field cannot be empty</DesiredTitle>}

			{((email.isDirty || password.isDirty) && (password.minLengthError)) && <DesiredTitle >Incorrect password length</DesiredTitle>}

			{((email.emailError) && (email.isDirty || password.isDirty)) && <DesiredTitle >Incorrect email</DesiredTitle>} 
		</>
	);

};


export default TitleList;