// Global dependencies
import { NewGaterwayRequestData } from 'api';

export default class BaseGater<T> {
    _gaterway: T;

    constructor(gaterData: T) {
        this._gaterway = { ...gaterData };
    }
}
