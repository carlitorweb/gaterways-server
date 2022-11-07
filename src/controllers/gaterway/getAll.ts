// Global dependencies
import { NextFunction, Request, Response } from 'express';

// Local dependencies
import GaterwaysInformation from '@models/gaterway/getAll';
import { count } from 'console';

const getAllGaterways = (req: Request, res: Response, next: NextFunction): void => {
    const gaterway = new GaterwaysInformation();

    gaterway
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Gateways information successfully obtained',
                totalOfGaterways: result.length,
                gaterways: result,
            });
        })
        .catch(error => {
            next(error);
        });
};

export default getAllGaterways;
