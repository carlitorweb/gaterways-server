// Global dependencies
import express from 'express';

// Instance Router object
const gaterwaysRouter = express.Router();

// local controls dependencies
import createGaterway from '@controllers/gaterway/create';

gaterwaysRouter.route('/create').post(createGaterway);

export default gaterwaysRouter;
