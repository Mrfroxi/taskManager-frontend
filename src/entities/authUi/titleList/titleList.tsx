import React from "react";
import { DesiredTitle } from "../../../shared/ui/desiredTitle/desiredTitle";

type TitleListProps = {
	isEmpty:boolean,
	isDirty:boolean,
	minLengthError:boolean,
	emailError:boolean,
}

const TitleList = ({isEmpty ,isDirty,minLengthError ,emailError}:TitleListProps) => {
	return (
		<>
			{(isEmpty && isDirty) && <DesiredTitle > The field cannot be empty</DesiredTitle>}

			{(isDirty && minLengthError) && <DesiredTitle >Incorrect password length</DesiredTitle>}

			{(emailError && isDirty) && <DesiredTitle >Incorrect email</DesiredTitle>} 
		</>
	);

};


export default TitleList;