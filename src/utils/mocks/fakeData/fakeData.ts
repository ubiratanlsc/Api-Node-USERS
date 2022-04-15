import {CreateUserService} from '../../../services/CreateUserService'
import {v4 as uuid} from 'uuid'

const  createUserService = new CreateUserService()
class FakeData {
    
    async execute() {
        
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

    async createUser(){
        const user = await createUserService.execute({
            id: uuid(),
            name: 'Algum usuário',
            email: 'email@email.com'
        })
        return user
    }
}
export { FakeData }