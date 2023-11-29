import { customErrors } from "./customErrors";
import HTTP_STATUS from 'http-status-codes';

export class NotAuthorizdError extends customErrors {

    statusCode = HTTP_STATUS.REQUEST_TOO_LONG;
    status = 'error';

    constructor(message: string){
        super(message);
    }

}