import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    cpass: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
});

const user = mongoose.model('User', userSchema);

export default user;