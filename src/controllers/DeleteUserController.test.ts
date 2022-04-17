import { getConnection } from 'typeorm'
import createConnection from '../database'
import { CreateUserController } from "./CreateUserController"
import { makeMockResponse } from '../utils/mocks/mockResponse'
import { FakeData } from '../utils/mocks/fakeData/fakeData'
import { DeleteUserController } from './DeleteUserController'
import { makeMockRequest } from '../utils/mocks/mockRequest'

describe('CreateUsercontroller', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })
    afterAll(async () => {
        const connection = await getConnection()
        await connection.close()
    })

    const createUserController = new CreateUserController();

    const fakeData = new FakeData();

    
    it('Deve retornar status 204 quando o usuário for deletado', async () =>{
         const mockUser = await fakeData.createUser()

         const deleteUserService = new DeleteUserController();

         const request = makeMockRequest({
             params:{
                 id: mockUser.id
             }
         })

         const response = makeMockResponse()

         await deleteUserService.handle(request, response)

         expect(response.state.status).toBe(204)
    })



})