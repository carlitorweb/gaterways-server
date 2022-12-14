// GLobal dependencies
import { Device, Gaterway } from '@prisma/client';

// Local dependencies
import prisma from '@prismaClient';
import { HTTP500 } from '@lib/errors/httpErrors';

/**
 * @classdesc Model class for get all information about our Gaterways
 *
 * @constructor
 */
export default class GaterwaysInformation {
    /**
     * @returns — A promise to be either resolved with the new Prisma.GaterwaysInformation data or rejected with an Error
     */
    async get() {
        try {
            // Get all gaterways information from the DB
            const gatersInfo = await prisma.gaterway.findMany({
                include: {
                    devices: true,
                },
            });

            return gatersInfo;
        } catch (e) {
            throw new HTTP500(e);
        }
    }
}
