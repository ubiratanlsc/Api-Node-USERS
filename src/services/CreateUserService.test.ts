import { getConnection } from 'typeorm';
import createConnection from '../database';
import { CreateUserService } from './CreateUserService'

describe('CreateUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios')
        await connection.close();
    })

    it('Deve retornar o Id do usuário criado', async () => {
        const createUserService = new CreateUserService()

        const result = await createUserService.execute({
            id: 'acb3ffd6-2b8e-4f9d-98d6-531e76bc2383',
            name: 'Algum usuário',
            email: 'email@email.com'
        });
        //console.log(result);
        
        expect(result).toHaveProperty('id')
    })
})

