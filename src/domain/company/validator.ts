import { BodyHandler, t } from 'elysia';

export const validatorCompanyBody = () => {
    return {
        body: t.Object({
            name: t.String({
                error: 'Name is required'
            }),
            age: t.Number()
        })
    }
};