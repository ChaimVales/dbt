import express  from 'express';
import  { login, register }  from '../controllers/userController';
import  { create, deletee, getAll, getByUser, update }  from '../controllers/messageController';
import {authMiddleware}  from '../middleware/authMiddleware';

const router = express.Router();

// User routes
router.post('/register', register);
router.post('/login', login);       

// Message routes 
router.post('/messages', authMiddleware, create);             
router.get('/messages', authMiddleware, getAll);             
router.get('/messages/user/:userId', authMiddleware, getByUser); 
router.put('/messages/:id', authMiddleware, update);          
router.delete('/messages/:id', authMiddleware,deletee);       

module.exports = router;



