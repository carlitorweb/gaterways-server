// Global dependencies
import express from 'express';

// Instance Router object
const gaterwaysRouter = express.Router();

// local controls dependencies
import createGaterway from '@controllers/gaterway/create';
import getAllGaterways from '@controllers/gaterway/getAll';
import getUniqueGaterway from '@controllers/gaterway/getUnique';

// Create a new gaterway endpoint - http://127.0.0.1:8000/gaterways/create
gaterwaysRouter.route('/create').post(createGaterway);

// Get the information of a single gaterway - http://127.0.0.1:8000/gaterways/gaterwayIdString
gaterwaysRouter.route('/:id').get(getUniqueGaterway);

// Get all gaterways information endpoint - http://127.0.0.1:8000/gaterways
gaterwaysRouter.route('/').get(getAllGaterways);

export default gaterwaysRouter;
