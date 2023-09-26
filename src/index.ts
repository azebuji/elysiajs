import { Elysia } from "elysia";
import routes from './routes/main';
import errorHandler from './../src/error/handleErros';
import { swagger } from '@elysiajs/swagger';


const app = new Elysia();

app.onError(errorHandler);
app.use(routes);
app.use(swagger());

app.listen(8080)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
