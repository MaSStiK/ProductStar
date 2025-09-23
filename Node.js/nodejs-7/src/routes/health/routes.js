
import { Router } from 'express';
import { health } from './controller.js';


const router = new Router();

router.use('/', health);


export default router;