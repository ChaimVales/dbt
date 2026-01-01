import messageDal from  '../dal/messageDal';

export const createuser = async (userId, username, content) => {
        return await create({ userId, username, content });
    }
export const   getAllMessages = async () => {
        return await getAll();
    }
export const  getMessagesByUser =  async (requestedUserId, loggedInUserId) => {
       
        if (requestedUserId !== loggedInUserId.toString()) throw new Error("Unauthorized");
        return await messageDal.getByUserId(requestedUserId);
    }
export const  updateMessage =  async (id, content, userId) => {
        const msg = await messageDal.findById(id);
        if (!msg || msg.userId !== userId.toString()) throw new Error("Unauthorized"); 
        return await messageDal.update(id, content);
    }
export const   deleteMessage = async (id, userId) => {
        const msg = await messageDal.findById(id);
        if (!msg || msg.userId !== userId.toString()) throw new Error("Unauthorized"); 
        return await messageDal.delete(id);
    }

