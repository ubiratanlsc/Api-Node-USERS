import { getConnection } from 'typeorm'
import createConnection from '../database'
import { CreateUserController } from "./CreateUserController"
import { Request } from 'express'
import { makeMockResponse } from '../utils/mocks/mockResponse'

describe('CreateUsercontroller', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })
    afterAll(async () => {
        const connection = await getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const createUserController = new CreateUserController();

    const response = makeMockResponse()

    it('Deve retornar status 201', async () => {


        const request = {
            body: {
                name: 'Algum Usuário',
                email: 'email@email.com'
            }
        } as Request



        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201)


    })
    it(' Deve retirnar status 400 quando o nome for informado', async () => {
        const request = {
            body: {
                name: '',
                email: 'email@email.com'
            }
        } as Request
        
        await createUserController.handle(request, response)

        expect(response.state.status).toBe(400)
    })

    it(' Deve retirnar status 201, não sendo colocado email', async () => {
        const request = {
            body: {
                name: 'Bira',
                email: ''
            }
        } as Request
        
        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201)
    })
})

