import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../cloudinary.js';
import { searchJob } from '../controllers/searchControllers.js';

const router = express.Router();

/*const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  }
});*/

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'jobgenie-cv',
    allowed_formats: ['pdf', 'doc', 'docx'],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error('Only PDF, DOC, DOCX files are allowed'));
};

const upload = multer({
  storage,
  fileFilter
});

router.post('/', upload.single('cv'), searchJob);

export default router;
