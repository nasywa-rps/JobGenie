const Profile = require('../models/UserProfile');

// Create a new User Profile
const createProfile = async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get User Profile by ID
const getProfileById = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findById(id);
        if (!profile) return res.status(404).json({ message: 'Profile not found' });
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update User Profile by ID
const updateProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!profile) return res.status(404).json({ message: 'Profile not found' });
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete User Profile by ID
const deleteProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findByIdAndDelete(id);
        if (!profile) return res.status(404).json({ message: 'Profile not found' });
        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProfile,
    getProfileById,
    updateProfile,
    deleteProfile,
};