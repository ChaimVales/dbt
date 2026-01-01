import userDal  from '../dal/userDal';


export const authMiddleware = async (req, res, next) => {
    const { username, password } = req.headers; 

    if (!username || !password) return res.status(401).send("Auth required");

    const user = await userDal.findByUsername(username);
    if (user && user.password === password) { 
        req.user = user;
        next();
    } else {
        res.status(401).send("Invalid credentials");
    }
};
