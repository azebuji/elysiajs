import { Elysia } from 'elysia';
import userRoutes from '../domain/user/routes';
import companyRoutes from '../domain/company/routes';

const routes = new Elysia();

routes.use(userRoutes);
routes.use(companyRoutes);

export default routes;

