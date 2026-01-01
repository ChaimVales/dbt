import {loginuser, registeruser, }  from '../services/userService';

export const register = async (req, res) => {
    try {
        const user = await registeruser(req.body.username, req.body.password);
        res.status(201).json(user);
    } catch (e) { res.status(400).send(e.message); }
};

export const login = async (req, res) => {
    try {
        const user = await loginuser(req.body.username, req.body.password);
        res.json({ message: "Success", user });
    } catch (e) { res.status(401).send(e.message); }
};