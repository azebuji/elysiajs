import { ErrorHandler } from "elysia";

const errorHandler = ({ code, error, set }: any) => {
    if (code === 'VALIDATION') {
        set.status = 400
        return error.message
    }
}

export default errorHandler;