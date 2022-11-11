// Global dependencies
import { Express } from 'express';

// Local dependencies
import GaterwayRoute from '@routes/gaterways';
import DeviceRoute  from '@routes/devices'

// Access to gaterways endpoints
const routeGaterwayApp = (app: Express): void => {
    app.use('/gaterways', GaterwayRoute);
};

// Access to gaterways endpoints
const routeDeviceApp = (app: Express): void => {
    app.use('/devices', DeviceRoute);
};

export { routeGaterwayApp, routeDeviceApp };
