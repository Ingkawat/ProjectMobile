import express from 'express';
import MybillController from '../controllers/mybillController.js';
const router = express.Router();

router.get('/mybill', MybillController.getAllDoc)

export default router