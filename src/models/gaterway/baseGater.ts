// Global dependencies
import { UniqueGaterway, NewGaterwayRequestData } from 'api';
import { Prisma } from '@prisma/client';

export default class BaseGater<T> {
    _gaterway: T;

    constructor(gaterData: T) {
        this._gaterway = { ...gaterData };
    }

    /*
     * Utility functions that takes a generated type and returns a type-safe object
     * which adheres to the generated types model fields.
     * */
    protected static findSpecificGaterway = (id: string): UniqueGaterway => {
        return Prisma.validator<Prisma.GaterwayWhereUniqueInput>()({
            id,
        });
    };
    protected static updateGaterwayData = (
        data: NewGaterwayRequestData
    ): NewGaterwayRequestData => {
        return Prisma.validator<Prisma.GaterwayUncheckedUpdateInput>()({
            ...data,
        });
    };
}
