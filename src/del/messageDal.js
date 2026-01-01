const mongoose = require('mongoose');
import db from '../db/mongo'


const messageSchema = new mongoose.Schema({
    userId: { type: String, required: true }, 
    username: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// const messageDal = {
export const  create = async(msgData) => {
        return await db.collection().create(msgData);
    }
export const   getAll = async () => {
        return await Message.find().sort({ createdAt: 1 }); 
    }
export const   getByUserId = async (userId) => {
        return await Message.find({ userId });
    }
export const   findById = async (id) => {
        return await Message.findById(id);
    }
export const   update = async (id, content) => {
        return await Message.findByIdAndUpdate(id, { content, updatedAt: Date.now() }, { new: true });
    }
export const   deleteuser = async (id) => {
        return await Message.findByIdAndDelete(id);
    }
// };
