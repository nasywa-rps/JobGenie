const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");

const User = require("./models/UserModel.js");
const Profile = require("../models/UserProfileModel.js");


const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadPath = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected!"));

// endpoint to add a new user
app.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API endpoint to fetch all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// endpoint to add a new job search request
app.post('/jobform', upload.single('cvFile'), async (req, res) => {
  try {
    console.log("BODY:", req.body);       // data1 - data5
    console.log("FILE:", req.file);       // cvFile

    const newProfile = new Profile(req.body);
    await newProfile.save();
    res.json(newProfile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Start the server
app.listen(3001, () => console.log("Server running on port 3001"));