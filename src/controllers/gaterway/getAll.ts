// Global dependencies
import { NextFunction, Request, Response } from 'express';

// Local dependencies
import GaterwaysInformation from '@models/gaterway/getAll';

const getAllGaterways = (req: Request, res: Response, next: NextFunction): void => {
    const gaterway = new GaterwaysInformation();

    gaterway
        .get()
        .then(result => {
            res.status(200).json({
                message: 'Gateways information successfully obtained',
                totalOfGaterways: result.length,
                gaterways: result,
            });
        })
        .catch(error => {
            // Oops!, something happen, let pass the word to the center error handler, he will know what happened
            next(error);
        });
};

export default getAllGaterways;
