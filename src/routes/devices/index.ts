// Global dependencies
import express from 'express';
import createDevice from '@controllers/device/create';

// Instance Router object
const deviceRouter = express.Router();

// Create a new device endpoint - http://127.0.0.1:8000/devices
deviceRouter.route('/').post(createDevice);

export default deviceRouter;
