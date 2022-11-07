// Global dependencies
import { NextFunction, Request, Response } from 'express';
import { NewGaterwayRequestData } from 'api';

// Local dependencies
import GaterwayCreate from '@models/gaterway/create';

interface NewPostData extends Request {
    body: NewGaterwayRequestData;
}

const createGaterway = (req: NewPostData, res: Response, next: NextFunction): void => {
    const gaterway = new GaterwayCreate(req.body);

    gaterway
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Gaterway stored successfully in the DB',
                gaterID: result.id,
            });
        })
        .catch(error => {
            next(error);
        });
};

export default createGaterway;
