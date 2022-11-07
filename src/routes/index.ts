// Global dependencies
import { Express } from 'express';

// Local dependencies
import GaterwayRoute from '@routes/gaterways';

// Access to gaterways endpoints
const routeGaterwayApp = (app: Express): void => {
    app.use('/gaterways', GaterwayRoute);
};

export { routeGaterwayApp };
