const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/UserController');


// Create a new user
router.post('/', createUser);

// Get all users
router.get('/', getAllUsers);

// Get an user by ID
router.get('/:id', getUserById);

// Update an user by ID
router.put('/:id', updateUser);

// Delete an user by ID
router.delete('/:id', deleteUser);

module.exports = router;