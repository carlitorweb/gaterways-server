// Global dependencies
import { NextFunction, Request, Response } from 'express';
import { NewGaterwayRequestData } from 'api';
import net from 'node:net';

// Local dependencies
import GaterwayCreate from '@models/gaterway/create';

interface NewGaterwayData extends Request {
    body: NewGaterwayRequestData;
}

const createGaterway = (req: NewGaterwayData, res: Response, next: NextFunction): void => {
    // Check if we got a valid IPv4 address, thrown a error otherwise

    if (!net.isIPv4(req.body.ipv4)) {
        res.status(400).json({
            message:
                'Wrong IP address. Please, remember a valid IPv4 address is in dot-decimal notation with no leading zeroes ',
            code: 400,
        });
    } else {
        const gaterway = new GaterwayCreate(req.body);

        gaterway
            .save()
            .then(gaterId => {
                res.status(201).json({
                    gaterwayCreatedId: gaterId?.id ?? false,
                    message: `Gaterway ${req.body.name} stored successfully in the DB`,
                });
            })
            .catch(error => {
                res.status(error._httpCode).json({
                    message: error.message,
                });
            });
    }
};

export default createGaterway;
