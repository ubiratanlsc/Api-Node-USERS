import  createConnection  from '../database'
import { CreateUserController } from "./CreateUserController" 
import { Request } from 'express'
import { makeMockResponse } from '../utils/mocks/mockResponse'

describe('CreateUsercontroller', () => {
   
    it('Deve retornar status 201', async() => {
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

        await createUserController.handle(request, response)

        await connection.query('DELETE FROM usuarios')

        expect(response.state.status).toBe(201)

        
    })

})

