import express from 'express';
import { fetchExtensionsData } from '../controllers/extensionsDataModel.controller';

const router = express.Router();

router.get('/extensions-data', fetchExtensionsData);

export default router;
