import { Request, Response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";


const router = Router();
const createUserController = new CreateUserController();
router.get('/', (request: Request, response: Response) => {

    return response.json({Menssage: 'Deu bom safado'})
})

router.post('/usuarios', createUserController.handle)

export{router}