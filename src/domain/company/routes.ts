import { Elysia, t } from 'elysia';
import { getAllCompanys, getOneCompany } from './controller';
import { validatorCompanyBody } from './validator';

const companyRoutes = new Elysia();
companyRoutes
    .group('/company', (companyRoutes) =>
        companyRoutes
            .get('/', getOneCompany)
            .decorate('validaToken', () => true)
            .get('/all', ({ validaToken, ...rest }) => getAllCompanys({ validator: validaToken(), rest }))
            .model({
                sign: t.Object({
                    username: t.String(),
                    password: t.String()
                })
            })
            .post('/erro', ({ body }) => body, {
                // with auto-completion for existing model name
                body: 'sign',
                response: 'sign'
            }))

export default companyRoutes;


