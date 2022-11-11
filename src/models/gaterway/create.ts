// GLobal dependencies
import { Prisma } from '@prisma/client';
import { NewGaterwayRequestData } from 'api';

// Local dependencies
import prisma from '@prismaClient';
import BaseGater from './baseGater';
import { HTTP400, HTTP500 } from '@lib/errors/httpErrors';

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
     * @throws HTTP400 if the serial number already exist in the DB
     *
     */
    async save(): Promise<void> {
        try {
            // Save the new Gaterway data in the DB
            await prisma.gaterway.create({
                data: this._gaterway,
            });
        } catch (e) {
            console.log(e);
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    e.message = `There is a unique constraint violation, a new gaterway cannot be created with this serial number: ${this._gaterway.sn}`;
                    throw new HTTP400(e, e.message);
                }
            } else {
                throw new HTTP500(e);
            }
        }
    }
}
