import { createServer } from "http";
import { userController } from "./controller/user_controller.mjs";

const PORT = process.env.PORT || 3000

const server = createServer(async (request, response) => {
    if (request.url.startsWith("/api/users")){
        userController(request,response);
    } else{
        response.statusCode = 400;
        response.write("No Response");
        response.end();
    }
    
});
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));