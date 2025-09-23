
import { Router } from 'express';
import healthRouter from './routes/health/routes.js';
import urlsRouter from './routes/urls/routes.js';

const router = new Router();

router.use('/api/health', healthRouter);
router.use('/', urlsRouter);

export default router;