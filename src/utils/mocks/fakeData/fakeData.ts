import {CreateUserService} from '../../../services/CreateUserService'
import {v4 as uuid} from 'uuid'



class FakeData {
    async execute() {
        const createUserService = new CreateUserService()
            await createUserService.execute({
                id: uuid(),
                name: 'Algum usuário',
                email: 'email@email.com'
            })
            await createUserService.execute({
                id: uuid(),
                name: 'Outro usuário',
                email: ''
            })
    }
}
export { FakeData }