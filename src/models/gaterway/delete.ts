// Global dependencies
import { UniqueGaterway } from 'api';
import { Gaterway } from '@prisma/client';

// Local dependencies
import prisma from '@prismaClient';
import { HTTP500 } from '@lib/errors/httpErrors';
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
    async delete(): Promise<Gaterway> {
        try {
            const deletePost = await prisma.gaterway.delete({
                where: BaseGater.findSpecificGaterway(this._gaterway.id),
            });

            return deletePost;
        } catch (e) {
            // I think I could not find that gaterway...or I made it and something really bad happen!?
            throw new HTTP500(e);
        }
    }
}
