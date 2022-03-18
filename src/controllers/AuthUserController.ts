import { Request, Response } from "express"
import { AuthUserService } from "../services/AuthUserService"

class AuthUserController {
    async handle(request: Request, response: Response){
        const service = new AuthUserService();
        //service.execute();
    }
}