import createConnection from '../database'
import { getConnection } from 'typeorm'
import { Request } from 'express'
//import { makeMockRequest } from '../utils/mocks/mockRequest'
import { makeMockResponse } from '../utils/mocks/mockResponse'
import { UpdateUserController } from './UpdateUserController'
import { FakeData } from '../utils/mocks/fakeData/fakeData'

describe('UpdateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios');
        await connection.close();
    })

const fakeData = new FakeData()

it('Deve retornar Status 204 quando o usuário for editado', async () => {

    const mockUser = await fakeData.createUser()

    const updateUserController = new UpdateUserController()

    const request = {
        body: {
            id: mockUser.id,
            name: 'Outro Nome', 
            email: 'bira@test.com.br'
        }
    } as Request

    const response = makeMockResponse()

    await updateUserController.handle(request, response)

    expect(response.state.status).toBe(204)

})
})