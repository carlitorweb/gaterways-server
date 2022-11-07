// GLobal dependencies
import { Gaterway } from '@prisma/client';
import { UniqueGaterway } from 'api';

// Local dependencies
import prisma from '@prismaClient';
import { HTTP500 } from '@lib/errors/httpErrors';
import BaseGater from './baseGater';

export default class GaterwayInformation extends BaseGater<UniqueGaterway> {
    constructor(gaterId: UniqueGaterway) {
        super(gaterId);
    }

    /**
     * @returns — A promise to be either resolved with the new Prisma.GaterwayInformation data or rejected with an Error
     */
    async save(): Promise<Gaterway | null> {
        try {
            // Get a unique gaterway information from the DB
            const gaterInfo = await prisma.gaterway.findUnique({
                where: BaseGater.findSpecificGaterway(this._gaterway.id),
            });

            return gaterInfo;
        } catch (e) {
            throw new HTTP500(e);
        }
    }
}
