const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
    createProfile,
    getProfileById,
    updateProfile,
    deleteProfile,
} = require("../controllers/UserProfileController.js");

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routes
router.get("/", getProfileById);
router.get("/:id", getProfileById);
router.post("/", upload.single('image'), createProfile);
router.put("/:id", upload.single('image'), updateProfile);
router.delete("/:id", deleteProfile);

module.exports = router;