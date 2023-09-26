import { Elysia } from 'elysia';
import { getAllUsers, getOneUser } from './controller';

const userRoutes = new Elysia();


userRoutes.group('/user', userRoutes => userRoutes
    .get('/', getOneUser)
    .get('/all', getAllUsers)
);

export default userRoutes;


