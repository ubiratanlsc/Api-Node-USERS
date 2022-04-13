import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService"
import {v4 as uuid} from "uuid"

class CreateUserController{
    async handle(request: Request, response: Response){

        const createUserServeice = new CreateUserService();

        const id = uuid();
        const name = request.body.name;
        const email = request.body.email;

        if( name?.length === 0 ) {
            return response.status(400).json({mensagem: "Nome Obrigatorio"})
        }
        const user = await createUserServeice.execute({id, name, email})
        return response.status(201).json({user})

    }
}

export {CreateUserController}