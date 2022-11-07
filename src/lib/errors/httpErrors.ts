import { HttpStatusCode } from 'api';
import BaseError from '@lib/errors/baseError';

export class HTTP200 extends BaseError {
    constructor(builtInError: Error | unknown, description = 'Request accepted successfully') {
        super(
            'REQUEST SUCCEEDED',
            HttpStatusCode.UNAUTHORIZED,
            true,
            description,
            builtInError
        );
    }
}

export class HTTP201 extends BaseError {
    constructor(
        builtInError: Error | unknown,
        description = 'Resource created successfully.'
    ) {
        super('CREATED', HttpStatusCode.UNAUTHORIZED, true, description, builtInError);
    }
}

export class HTTP400 extends BaseError {
    constructor(
        builtInError: Error | unknown,
        description = 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).'
    ) {
        super('BAD REQUEST', HttpStatusCode.BAD_REQUEST, true, description, builtInError);
    }
}

export class HTTP401 extends BaseError {
    constructor(
        builtInError: Error | unknown,
        description = 'Not valid authentication credentials.'
    ) {
        super(
            'NOT AUTHORIZATION',
            HttpStatusCode.UNAUTHORIZED,
            true,
            description,
            builtInError
        );
    }
}

export class HTTP403 extends BaseError {
    constructor(
        builtInError: Error | unknown,
        description = 'Your client does not have permission to get the URL from this server.'
    ) {
        super('NOT ALLOWED', HttpStatusCode.FORBIDDEN, true, description, builtInError);
    }
}

export class HTTP404 extends BaseError {
    constructor(
        builtInError: Error | unknown,
        description = 'The resource you requested was not found.'
    ) {
        super('NOT FOUND', HttpStatusCode.NOT_FOUND, true, description, builtInError);
    }
}

export class HTTP500 extends BaseError {
    constructor(
        builtInError: Error | unknown,
        description = 'The server encountered an unexpected condition that prevented it from fulfilling the request.'
    ) {
        super(
            'INTERNAL SERVER ERROR',
            HttpStatusCode.INTERNAL_SERVER,
            true,
            description,
            builtInError
        );
    }
}
