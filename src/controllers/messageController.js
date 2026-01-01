import  { createuser, deleteMessage, getAllMessages, getMessagesByUser, updateMessage }  from '../services/messageService';

export const create = async (req, res) => {
    try {
        const msg = await createuser(req.user.id, req.user.username, req.body.content);
        res.status(201).json(msg);
    } catch (e) { res.status(400).send(e.message); }
};

export const getAll = async (req, res) => {
    const msgs = await getAllMessages();
    res.json(msgs);
};

export const getByUser = async (req, res) => {
    try {
        const msgs = await getMessagesByUser(req.params.userId, req.user.id);
        res.json(msgs);
    } catch (e) { res.status(403).send(e.message); }
};

export const update = async (req, res) => {
    try {
        const msg = await updateMessage(req.params.id, req.body.content, req.user.id);
        res.json(msg);
    } catch (e) { res.status(403).send(e.message); }
};

export const deletee = async (req, res) => {
    try {
        await deleteMessage(req.params.id, req.user.id);
        res.status(204).send();
    } catch (e) { res.status(403).send(e.message); }
};