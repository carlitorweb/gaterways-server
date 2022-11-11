// Global dependencies
import { NextFunction, Request, Response } from 'express';
import { NewGaterwayRequestData } from 'api';

// Local dependencies
import GaterwayCreate from '@models/gaterway/create';

interface NewGaterwayData extends Request {
    body: NewGaterwayRequestData;
}

const createGaterway = (req: NewGaterwayData, res: Response, next: NextFunction): void => {
    const gaterway = new GaterwayCreate(req.body);

    gaterway
        .save()
        .then(() => {
            res.status(201).json({
                message: `Gaterway ${req.body.name} stored successfully in the DB`,
            });
        })
        .catch(error => {
            res.status(error._httpCode).json({
                message: error.message,
            });
        });
};

export default createGaterway;
