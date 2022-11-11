// Global dependencies
import { UniqueDevice } from 'api';
import { Prisma } from '@prisma/client';

export default class BaseGater<T> {
    _device: T;

    constructor(deviceData: T) {
        this._device = { ...deviceData };
    }

    /*
     * Utility functions that takes a generated type and returns a type-safe object
     * which adheres to the generated types model fields.
     * */
    protected static findSpecificDevice = (id: string): UniqueDevice => {
        return Prisma.validator<Prisma.DeviceWhereUniqueInput>()({
            id,
        });
    };
}
