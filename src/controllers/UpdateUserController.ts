import { Request, Response } from 'express'
import { UpdateUserService } from '../services/UpdateUserService';

class UpdateUserController {
    async handle(request: Request, response: Response){
        //const id = request.id

        const updateUserService = new UpdateUserService();

        const {id, name, email } = request.body

        if(id.length === 0) {
            return response.status(400).json({message: 'Id não informado'})
        }

        if(name.length === 0) {
            return response.status(400).json({message: 'Informe um nome'})
        } 

        await updateUserService.execute({id, name, email})

        return response.status(204).json()
    }

}
 export {UpdateUserController}
