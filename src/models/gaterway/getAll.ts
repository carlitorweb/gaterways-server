// GLobal dependencies
import { Gaterway } from '@prisma/client';

// Local dependencies
import prisma from '@prismaClient';
import { HTTP500 } from '@lib/errors/httpErrors';

export default class GaterwaysInformation {
    /**
     * @returns — A promise to be either resolved with the new Prisma.GaterwaysInformation data or rejected with an Error
     */
    async save(): Promise<Gaterway[]> {
        try {
            // Get all gaterways information from the DB
            const gatersInfo = await prisma.gaterway.findMany();

            return gatersInfo;
        } catch (e) {
            throw new HTTP500(e);
        }
    }
}
