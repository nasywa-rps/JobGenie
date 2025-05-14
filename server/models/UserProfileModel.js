import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
    data1: {
        type: String,
        required: true
    },
    data2: {
        type: String,
        required: true
    },
    data3: {
        type: String,
        required: true
    },
    data4: {
        type: String,
        required: true
    },
    data5: {
        type: String,
        required: true
    },
    cvFile: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Profile = mongoose.model('Profile', userProfileSchema);

export default Profile;