// routes/classifyRoutes.js
import express from 'express';
import multer from 'multer';
import { classifyCV } from '../controllers/classifyController.js';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('cv'), classifyCV);

export default router;
