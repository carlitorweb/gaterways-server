// Global dependencies
import { UniqueGaterway } from 'api';
import { Gaterway, Prisma } from '@prisma/client';

// Local dependencies
import prisma from '@prismaClient';
import { HTTP404, HTTP500 } from '@lib/errors/httpErrors';
import BaseGater from './baseGater';

/**
 * @classdesc Model class for delete a Gaterway
 *
 * @constructor
 */
export default class DeletePost extends BaseGater<UniqueGaterway> {
    constructor(postData: UniqueGaterway) {
        super(postData);
    }

    /**
     * @public @async @function delete
     * @description Delete a gaterway
     *
     * @returns A object with the deleted Gaterway data
     *
     * @throws HTTP500 if anything go wrong within prisma.gaterway.delete(). Maybe a ghost _gaterway.id?
     *
     */
    async delete(): Promise<void> {
        try {
            // We need disconnect all the devices from the gaterway before delete it
            await prisma.gaterway.update({
                where: {
                    id: this._gaterway.id,
                },
                data: {
                    devices: {
                        set: [],
                    },
                },
                include: {
                    devices: true,
                },
            });

            // Devices released, let delete the gaterway
            await prisma.gaterway.delete({
                where: BaseGater.findSpecificGaterway(this._gaterway.id),
            });
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2025') {
                    e.message = `The record searched in the where condition ({gaterway}.{id} = {${this._gaterway.id}}) does not exist`;
                    throw new HTTP404(e, e.message);
                }
            } else {
                throw new HTTP500(e);
            }
        }
    }
}
