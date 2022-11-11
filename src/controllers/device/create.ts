// Global dependencies
import { NextFunction, Request, Response } from 'express';
import { NewDeviceRequestData } from 'api';

// Local dependencies
import DeviceCreate from '@models/device/create';

interface NewDeviceData extends Request {
    body: NewDeviceRequestData;
}

const createDevice = (req: NewDeviceData, res: Response, next: NextFunction): void => {
    const device = new DeviceCreate(req.body);

    device
        .save()
        .then(response => {
            res.status(201).json({
                message: `Device with UID ${response.id} stored successfully`,
            });
        })
        .catch(error => {
            res.status(error._httpCode).json({
                message: error.message,
            });
        });
};

export default createDevice;
