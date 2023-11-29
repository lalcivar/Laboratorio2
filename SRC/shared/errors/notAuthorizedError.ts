import { customErrors } from "./customErrors";
import HTTP_STATUS from 'http-status-codes';

export class NotAuthorizedError extends customErrors {

    statusCode = HTTP_STATUS.UNAUTHORIZED;
    status = 'error';

    constructor(message: string){
        super(message);
    }

}