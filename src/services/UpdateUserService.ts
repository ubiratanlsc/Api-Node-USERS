import { getRepository } from 'typeorm'
import { Usuario } from '../entities/Usuario';


interface IUser {
    id: string;
    name: string;
    email?: string;
}
class UpdateUserService {
    async execute( {id, name, email}: IUser){ 
        const user = await getRepository(Usuario)
            .createQueryBuilder()
            .update()
            .set({
                name: name,
                email: email
            })
            .where('id = :id', {id} )
            .execute()
            console.log(user);            
        return user.raw
    }       

}

export { UpdateUserService }