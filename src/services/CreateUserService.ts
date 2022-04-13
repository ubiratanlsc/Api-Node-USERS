import { getRepository, MssqlParameter } from "typeorm"
import { Usuario } from "../entities/Usuario"
interface IUsuario {
     id: string,
     name: string,
     email?: string
}
class CreateUserService {
     async execute({id, name, email }: IUsuario) {

          const usuario = await getRepository(Usuario)
               .createQueryBuilder("user")
               .createQueryBuilder()
               .insert()
               .into(Usuario)
               .values([
                    {
                         id: id,
                         name: name,
                         email: email
                    }
               ])
               .execute();
               //console.log(usuario);
               
          return usuario.identifiers[0]
     }
}

export { CreateUserService }