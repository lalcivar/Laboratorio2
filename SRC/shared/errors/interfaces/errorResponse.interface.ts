import { IError } from "./error.interface";

export interface IErrorResponse {

    message: string;
    statuscode: number;
    status: string;
    seriaLizeErrors(): IError;
}