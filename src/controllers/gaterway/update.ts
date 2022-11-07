// Global dependencies
import { NewGaterwayRequestData } from 'api';
import { NextFunction, Request, Response } from 'express';

// Local dependencies
import GaterwayUpdate from '@models/gaterway/update';

interface UpdateGaterwayData extends Request {
    body: NewGaterwayRequestData;
}

/**
 * @async @function update
 *
 * @param req Express request param
 * @param res Express response param
 * @param next Express NextFunction param
 *
 * @returns A Error if was not possible updated the post data, otherwise I give a valid 200 response
 */
const update = async (
    req: UpdateGaterwayData,
    res: Response,
    next: NextFunction
): Promise<void | Error> => {
    // Get the gaterway id we should to update
    const gaterId = req.params.id;

    // Initialize the post with the data we will update
    const gater = new GaterwayUpdate(req.body);

    return await gater
        .update(gaterId)
        .then(() => {
            res.status(200).json({
                message: `Gaterway with id:${req.params.id} updated!`,
            });
        })
        .catch(error => {
            res.status(error._httpCode).json({
                message: error.message,
            });
        });
};
export default update;
