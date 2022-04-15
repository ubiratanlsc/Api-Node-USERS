import { Request, Response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";


const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();



router.get('/', (request: Request, response: Response) => {

    return response.json({Menssage: 'Deu bom safado'})
})

router.post('/usuarios', createUserController.handle)
router.get('/usuarios', getAllUserController.handle)
export{router}