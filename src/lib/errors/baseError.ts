import { HttpStatusCode } from 'api';

export default class BaseError extends Error {
    readonly _name: string;
    readonly _httpCode: HttpStatusCode;
    readonly _isOperational: boolean;
    readonly _builtInError: Error | unknown;

    constructor(
        name: string,
        httpCode: HttpStatusCode,
        isOperational: boolean,
        description: string,
        error: Error | unknown
    ) {
        super(description);

        this._name = name;
        this._httpCode = httpCode;
        this._isOperational = isOperational;
        this._builtInError = error;

        Error.captureStackTrace(this, BaseError);
    }
}
