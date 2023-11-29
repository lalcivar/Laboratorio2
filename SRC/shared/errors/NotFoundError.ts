import HTTP_STATUS from 'http-status-codes';
import { customErrors } from "./customErrors";

export class NotFoundError extends customErrors {

    statusCode = HTTP_STATUS.NOT_FOUND;
    status = 'error';

    constructor(message: string){

        super(message);
    }

}