import { IError } from "./interfaces/error.interface";

export abstract class customErrors extends Error {

    abstract statusCode:number;
    abstract status:string;

    constructor(message: string) {
         super(message);
    }

    seriaLizeErrors():IError{
        return{
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        };
    }
}

