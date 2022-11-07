// GLobal dependencies
import { Gaterway } from '@prisma/client';
import { NewGaterwayRequestData } from 'api';

// Local dependencies
import prisma from '@prismaClient';
import BaseGater from './baseGater';
import { HTTP500 } from '@lib/errors/httpErrors';

/**
 * @classdesc Model class for create a Gaterway
 *
 * @constructor
 */
export default class GaterwayCreate extends BaseGater<NewGaterwayRequestData> {
    constructor(gaterData: NewGaterwayRequestData) {
        super(gaterData);
    }

    /**
     * @public @async @function save
     * @description Create a new gaterway
     *
     * @returns The ID of the created gaterway
     *
     * @throws HTTP500 if anything go wrong within prisma.gaterway.create(). Maybe is not a object with the correct fields?
     *
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
