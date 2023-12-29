import { db } from "../config/database.mjs";
import type { User } from "../models/types.mjs";
import { isUser } from "../models/types.mjs";
import { IncomingMessage, ServerResponse } from "http";
import { getBody } from "../utils.mjs";
import { randomUUID } from "crypto";
import { parse as parseUrl } from 'url';
import { parse as parseQuery } from 'querystring';

const {users} = db.data;
const getUsers = (request: IncomingMessage,response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(users));
    response.end();
    return users;
}

const addUser = async (request: IncomingMessage,response: ServerResponse) => {
    let data:object = await getBody(request);
    if (isUser(data)){
        data.id = randomUUID();
        data.dob = new Date(data.dob);
        users.push(data as User);
        response.statusCode = 201;
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(data));
    } else {
        response.statusCode = 400
    }
    response.end();
}

const updateUser = async (request: IncomingMessage,response: ServerResponse) => {
    let data:object = await getBody(request);
    response.setHeader("Content-Type", "application/json");
    
    if (isUser(data)){
        const userData = data as User;
        const userIndex = users.findIndex(user => user.id === userData.id);
        if (userIndex !== -1){
            userData.dob = new Date(userData.dob);
            users[userIndex] = userData;
            response.statusCode = 200;
            response.write(JSON.stringify(data));
        } else {
            response.statusCode = 404;
            response.write({message: "User not found"});
        }
    } else {
        response.statusCode = 400;
    }
    response.end();
}

const deleteUser = async (request: IncomingMessage,response: ServerResponse) => {
    const parsedUrl = parseUrl(request.url || '', true);
    const queryParams = parsedUrl.query;
    const userIndex = users.findIndex(user => user.id === queryParams.id);
    response.setHeader("Content-Type", "application/json");
    
    if (userIndex !== -1){
        users.splice(userIndex,1);
        response.statusCode = 204;
        response.write(JSON.stringify({message: "User successfully deleted"}));
    } else {
        response.statusCode = 404;
        response.write(JSON.stringify({message: "User not found"}));
    }
    response.end();
}

export {getUsers,addUser, updateUser, deleteUser}
