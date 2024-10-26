import express from 'express';
import { CasesController } from '../controllers/case.controller';

const router = express.Router();

router.get('/cases/aggregate', CasesController.getAggregatedData);

export default router;
