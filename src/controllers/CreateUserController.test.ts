import  createConnection  from '../database'
import { CreateUserController } from "./CreateUserController"
import { Request } from 'express'
import { makeMockResponse } from '../utils/mocks/mockResponse'

describe('CreateUsercontroller', () => {
   
    it('Deve retornar o id do usuário criado', async() => {
        await createConnection()
        const createUserController = new CreateUserController();

        const request = {
            body: {
                nome: 'Algum Usuário',
                email: 'email@email.com'
            }
        } as Request

        const response = makeMockResponse()

        const result = createUserController.handle(request, response)

        console.log(result + '           Ok, aqui é o final do result');
        
    })

})

