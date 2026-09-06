// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

// OR


import {z, ZodError} from 'zod';

const ageSchema = z.number().min(18).max(100).int();
// const userAge = 19;
const userAge = 18;

const parseUserAge = ageSchema.parse(userAge);
console.log(parseUserAge);
