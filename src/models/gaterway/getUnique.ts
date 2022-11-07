// GLobal dependencies
import { Gaterway, Prisma } from '@prisma/client';
import { UniqueGaterway } from 'api';

// Local dependencies
import prisma from '@prismaClient';
import { HTTP500, HTTP404 } from '@lib/errors/httpErrors';
import BaseGater from './baseGater';

/**
 * @classdesc Model class for get the unique information about one of our Gaterways
 *
 * @constructor
 */
export default class GaterwayInformation extends BaseGater<UniqueGaterway> {
    constructor(gaterId: UniqueGaterway) {
        super(gaterId);
    }

    /**
     * @returns — A promise to be either resolved with the new Prisma.GaterwayInformation data or rejected with an Error
     */
    /**
     * @public @async @function get
     * @description Get the data of a specific Gaterway
     *
     * @returns The data of the gaterway
     *
     * @throws HTTP500 if anything go wrong within prisma.gaterway.findUniqueOrThrow().
     * @throws HTTP404 if the gaterway do not exist in the DB
     *
     */
    async get(): Promise<Gaterway | undefined> {
        try {
            // Get a unique gaterway information from the DB
            const gaterInfo = await prisma.gaterway.findUniqueOrThrow({
                where: BaseGater.findSpecificGaterway(this._gaterway.id),
            });

            return gaterInfo;
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2001') {
                    console.log(
                        `The record searched in the where condition ({gaterway}.{id} = {${this._gaterway.id}}) does not exist`
                    );

                    throw new HTTP404(e);
                }
            } else {
                throw new HTTP500(e);
            }
        }
    }
}
