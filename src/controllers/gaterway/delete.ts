// Global dependencies
import { UniqueGaterway } from 'api';
import { NextFunction, Request, Response } from 'express';

// Local dependencies
import GaterwayDelete from '@models/gaterway/delete';

interface GaterwayDataId extends Request {
    body: UniqueGaterway;
}

const deleteGaterway = async (
    req: GaterwayDataId,
    res: Response,
    next: NextFunction
): Promise<void | Error> => {
    // Get the gaterway id we should delete
    req.body.id = req.params.id;

    // Initialize the gaterway we will delete
    const gater = new GaterwayDelete(req.body);

    return await gater
        .delete()
        .then(gater => {
            // The End - gaterway deleted. Response with the gaterway data in case someone need to see it one last time
            res.status(200).json({
                message: 'Gaterway deleted! phew!!',
                gaterway: gater,
            });
        })
        .catch(error => {
            // Oops!, something happen, let pass the word to the center error handler, he will know what happened
            next(error);
        });
};

export default deleteGaterway;
