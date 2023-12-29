import { UUID } from "crypto";
import { isDate } from "util/types";

type User = {
    id:UUID,
    name:string,
    email:string,
    dob:Date
}
const isValidDate = (date: any): date is Date => {
    return isDate(date) && !isNaN(date.getTime());
}

const isUser = (obj: any): obj is User => {
    console.log(typeof obj === 'object');
    console.log(typeof obj.name === 'string');
    console.log(typeof obj.email === 'string')
    console.log(isValidDate(new Date(obj.dob)))
    return (
        typeof obj === 'object' &&
        typeof obj.name === 'string' &&
        typeof obj.email === 'string' &&
        isValidDate(new Date(obj.dob))
    );
}

export type {User};
export {isUser}