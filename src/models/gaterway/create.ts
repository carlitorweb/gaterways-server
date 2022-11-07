// GLobal dependencies
import { Gaterway } from '@prisma/client';
import { NewGaterwayRequestData } from 'api';

// Local dependencies
import prisma from '@prismaClient';
import BaseGater from './baseGater';
import { HTTP500 } from '@lib/errors/httpErrors';

export default class GaterwayCreate extends BaseGater<NewGaterwayRequestData> {
    constructor(gaterData: NewGaterwayRequestData) {
        super(gaterData);
    }

    /**
     * @returns — A promise to be either resolved with the new Prisma.GaterwayCreate data or rejected with an Error
     */
    async save(): Promise<Gaterway> {
        try {
            // Save the new Gaterway data in the DB
            const newGaterway = await prisma.gaterway.create({
                data: this._gaterway,
            });

            return newGaterway;
        } catch (e) {
            throw new HTTP500(e);
        }
    }
}
