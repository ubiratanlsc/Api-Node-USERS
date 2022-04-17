import createConnection from "../database";
import { getConnection } from "typeorm"
import { FakeData } from "../utils/mocks/fakeData/fakeData"
import { DeleteUserService } from "./DeleteUserService"

describe('DeleteUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.runMigrations();
    })

    const fakeData = new FakeData();

    it('Deve retornar um Array vazio, quando um ussuário for deletado', async () => {
        const mockUser = await fakeData.createUser();

        const deleteUserService = new DeleteUserService();

        const result = await deleteUserService.execute({ id: mockUser.id });

        expect(result).toHaveLength(0)
    })
})