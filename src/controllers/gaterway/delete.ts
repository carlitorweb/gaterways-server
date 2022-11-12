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
        .then(() => {
            // The End - gaterway deleted. Response with the gaterway data in case someone need to see it one last time
            res.status(200).json({
                message: `Gaterway with ID:${req.params.id} deleted and his devices disconeccted (if any was there). Phew!!`,
            });
        })
        .catch(error => {
            res.status(error._httpCode).json({
                message: error.message,
            });
        });
};

export default deleteGaterway;
