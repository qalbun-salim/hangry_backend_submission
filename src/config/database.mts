import { JSONFilePreset } from 'lowdb/node'
import type { User } from '../models/types.mjs';
import { randomUUID } from 'crypto';

type Data = {
    users: User[]
}

// Read or create db.json
const defaultData:Data = { users: [{id:randomUUID(),name:"John",email:"john@gmail.com",dob:new Date(Date.now())}] };
const db = await JSONFilePreset<Data>('db.json', defaultData);


export {db};