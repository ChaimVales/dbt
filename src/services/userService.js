import userDal  from '../dal/userDal';

// export const userService = {
export const  registeruser =  async (username, password) => {
        return await userDal.createUser(username, password);
    }
export const  loginuser =  async (username, password) => {
        const user = await userDal.findByUsername(username);
        if (user && user.password === password) return user;
        throw new Error("Login failed");
    }
// };
