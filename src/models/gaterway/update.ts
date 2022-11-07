// Global dependencies
import { Prisma, Gaterway } from '@prisma/client';
import { NewGaterwayRequestData } from 'api';

// Local dependencies
import prisma from '@prismaClient';
import BaseGater from './baseGater';
import { HTTP404, HTTP500 } from '@lib/errors/httpErrors';
import BaseError from '@lib/errors/baseError';

/**
 * @classdesc Model class for edit the data of a gaterway
 *
 * @constructor
 */
export default class GaterwayUpdate extends BaseGater<NewGaterwayRequestData> {
    constructor(gaterData: NewGaterwayRequestData) {
        super(gaterData);
    }

    /**
     * @public @async @function update
     * @description Update the gaterway data
     *
     * @returns The updated data of the gaterway
     *
     * @throws  HTTP500 if anything go wrong within prisma.gaterway.update().
     * @throws  HTTP404 if the gaterway do not exist in the DB
     *
     */
    async update(gaterId: string): Promise<void> {
        try {
            // Not a big deal with prisma, just search and update
            await prisma.gaterway.update({
                where: BaseGater.findSpecificGaterway(gaterId),
                data: BaseGater.updateGaterwayData(this._gaterway),
            });
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2025') {
                    e.message = `The record searched in the where condition ({gaterway}.{id} = {${gaterId}}) does not exist`;
                    throw new HTTP404(e, e.message);
                }
            } else {
                throw new HTTP500(e);
            }
        }
    }
}
