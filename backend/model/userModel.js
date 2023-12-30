import mongoose from 'mongoose';
const usereSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
        sparse: true,
    },
    password: { type: String, required: true },
});


const User = mongoose.model('User', usereSchema)
export default User;