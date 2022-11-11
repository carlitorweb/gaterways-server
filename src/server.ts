// Global dependencies
import express from 'express';
import morgan from 'morgan';

// Import routes
import { routeGaterwayApp, routeDeviceApp } from '@routes/index';

// Instance express object
const app = express();

// Declare explicity the port and host of the sevice.
// This can be also declare in the .env file
const PORT = 8000;
const HOST = '127.0.0.1';

// Express Middleware to parse the incoming body
app.use(express.json());

// Set some default headers
app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Log out the HTTP requests
app.use(morgan('tiny'));

// Define routes
routeGaterwayApp(app);
routeDeviceApp(app);

// Start the server
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
