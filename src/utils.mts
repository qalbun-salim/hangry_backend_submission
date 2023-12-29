import { IncomingMessage } from "http";

const getBody = (request: IncomingMessage):Promise<object> => {
    return new Promise((resolve,reject) => {
        let data:Buffer[] = []
        let jsonBody:object;
        request.on("data", chunk =>{
            data.push(chunk);
        })
        request.on("end", () =>{
            jsonBody = JSON.parse(Buffer.concat(data).toString());
            resolve(jsonBody);
        })
        return jsonBody;
    })

    
}

export {getBody}