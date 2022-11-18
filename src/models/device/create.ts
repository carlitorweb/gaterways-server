// GLobal dependencies
import { Prisma } from '@prisma/client';
import { NewDeviceRequestData } from 'api';

// Local dependencies
import prisma from '@prismaClient';
import BaseDevice from './baseDevice';
import { HTTP400, HTTP500 } from '@lib/errors/httpErrors';

/**
 * @classdesc Model class for create a Device
 *
 * @constructor
 */
export default class DeviceCreate extends BaseDevice<NewDeviceRequestData> {
    constructor(deviceData: NewDeviceRequestData) {
        super(deviceData);
    }

    /**
     * @public @async @function save
     * @description Create a new device
     *
     * @returns The ID of the created device
     *
     * @throws HTTP500 if anything go wrong within prisma.device.create(). Maybe is not a object with the correct fields?
     * @throws HTTP400 if the serial number already exist in the DB
     *
     */
    async save(): Promise<{ id: string; createdAt: Date }> {
        try {
            // Save the new Device data in the DB
            const newDevice = await prisma.device.create({
                data: this._device,
                select: {
                    id: true,
                    createdAt: true,
                },
            });

            return newDevice;
        } catch (e) {
            console.log(e);
            throw new HTTP500(e);
        }
    }
}
