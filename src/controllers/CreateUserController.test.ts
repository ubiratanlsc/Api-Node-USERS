import  createConnection  from '../database'
import { CreateUserController } from "./CreateUserController"
import { Request } from 'express'
import { makeMockResponse } from '../utils/mocks/mockResponse'

describe('CreateUsercontroller', () => {
   
    it('Deve retornar o id do usuário criado', async() => {
        const connection  = await createConnection()
        await connection.runMigrations()
        const createUserController = new CreateUserController();

        const request = {
            body: {
                name: 'Algum Usuário',
                email: 'email@email.com'
            }
        } as Request

        const response = makeMockResponse()

        const result = await createUserController.handle(request, response)

        console.log(result);
        
    })

})

