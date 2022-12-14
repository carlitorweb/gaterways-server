// Global dependencies
import express from 'express';

// Instance Router object
const gaterwaysRouter = express.Router();

// local controls dependencies
import createGaterway from '@controllers/gaterway/create';
import getAllGaterways from '@controllers/gaterway/getAll';
import getUniqueGaterway from '@controllers/gaterway/getUnique';
import deleteGaterway from '@controllers/gaterway/delete';
import updateGaterway from '@controllers/gaterway/update';

// Get the information of a single gaterway endpoint - http://127.0.0.1:8000/gaterways/id
gaterwaysRouter.route('/:id').get(getUniqueGaterway);

// Update a gaterway endpoint - http://127.0.0.1:8000/gaterways/id
gaterwaysRouter.route('/:id').put(updateGaterway);

// Delete a gaterway endpoint - http://127.0.0.1:8000/gaterways/id
gaterwaysRouter.route('/:id').delete(deleteGaterway);

// Create a new gaterway endpoint - http://127.0.0.1:8000/gaterways/create
gaterwaysRouter.route('/').post(createGaterway);

// Get all gaterways information endpoint - http://127.0.0.1:8000/gaterways
gaterwaysRouter.route('/').get(getAllGaterways);

export default gaterwaysRouter;
