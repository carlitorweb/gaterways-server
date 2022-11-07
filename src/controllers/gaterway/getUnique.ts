// Global dependencies
import { NextFunction, Request, Response } from 'express';
import { UniqueGaterway } from 'api';

// Local dependencies
import GaterwayInformation from '@models/gaterway/getUnique';

// A object is needed for the model class. Also, this give me better model validations with typescript
interface GaterwayDataId extends Request {
    body: UniqueGaterway;
}

const getUniqueGaterway = (req: GaterwayDataId, res: Response, next: NextFunction): void => {
    req.body.id = req.params.id;
    const gaterway = new GaterwayInformation(req.body);

    gaterway
        .get()
        .then(result => {
            res.status(200).json({
                message: 'Unique Gaterway information successfully obtained',
                gaterway: result,
            });
        })
        .catch(error => {
            // Oops!, something happen, let pass the word to the center error handler, he will know what happened
            next(error);
        });
};

export default getUniqueGaterway;
