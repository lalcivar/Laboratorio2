import HTTP_STATUS from 'http-status-codes';
import { customErrors } from "./customErrors";

export class JoiValidateError extends customErrors {

    statusCode = HTTP_STATUS.BAD_REQUEST;
    status = 'error';

    constructor(message: string){

        super(message);
    }

}