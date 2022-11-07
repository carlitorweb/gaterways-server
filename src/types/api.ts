export type NewGaterwayRequestData = {
    sn: string;
    name: string;
    ipv4: string;
    //devices?: string[];
};

export type UniqueGaterway = {
    id: string;
};

export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
}
