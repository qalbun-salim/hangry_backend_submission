import { IncomingMessage, ServerResponse } from "http";
import { getUsers,addUser, deleteUser, updateUser } from "../handlers/userHandler.mjs";

const userController = async (request:IncomingMessage,response:ServerResponse) => {
    switch(request.method){
        case "GET":
            getUsers(request,response);
            break;
        case "POST":
            await addUser(request,response);
            break;
        case "PUT":
            await updateUser(request,response)
            break;
        case "DELETE":
            await deleteUser(request,response)
            break;
        default:
            response.statusCode = 400;
            response.write("No Response");
            response.end();
    }
}

export {userController}