import HTTP_STATUS from 'http-status-codes';
import { customErrors } from "./customErrors";

export class ServerError extends customErrors {

    statusCode = HTTP_STATUS.SERVICE_UNAVAILABLE;
    status = 'error';

    constructor(message: string){

        super(message);
    }

}