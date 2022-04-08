import 'reflect-metadata';
import express from 'express';
import { router } from './src/routes';
import createConnection from './src/database';

createConnection();
const server = express()

server.use(express.json())
server.use(router)

server.listen(5000, () => {
     console.log('Server online caraio, ta na porta 5000 http://localhost:5000/usuarios');
     
})