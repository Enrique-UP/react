// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

// OR

import {z, ZodError} from 'zod';

const ageSchema = z.number().min(18).max(100).int();
// const userAge = 19;
const userAge = 18;

try{
	const parseUserAge = ageSchema.parse(userAge);
	console.log(parseUserAge); // success case
}catch(error){
	if(error instanceof ZodError){
		console.log(error.issues[0].message);
	}else{
		console.log('Unexpected error: ', error);
	}
}